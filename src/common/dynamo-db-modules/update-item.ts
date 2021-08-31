import {
  AttributeValue,
  ExpressionAttributeNameMap,
  ExpressionAttributeValueMap,
} from "aws-sdk/clients/dynamodb";

import { TableNames } from "../constants";
import { dynamoClient } from "../utils/aws";

export const updateItem = async <T>(params: {
  key: Partial<T>;
  tableName: TableNames;
  updateAttributes: Partial<T>;
}): Promise<T> => {
  const { updateAttributes, key, tableName } = params;
  const ExpressionAttributeNames: ExpressionAttributeNameMap = {};
  const ExpressionAttributeValues: ExpressionAttributeValueMap = {};
  const UpdateExpressionList: string[] = [];
  const [keyAttribute] = Object.keys(key);

  Reflect.deleteProperty(updateAttributes, keyAttribute);

  for (const key in updateAttributes) {
    if (updateAttributes[key] === undefined) {
      continue;
    }

    // DynamoDB 키에 특수문자가 허용되지 않기때문에 키에 "#"이 있을 경우 임의 키를 생성해서 mapping (복합 정렬 키)
    // Ex) like#createdAt => #likecreatedAt
    const keyName = key.includes("#") ? key.split("#").join("") : key;

    ExpressionAttributeNames["#" + keyName] = key;
    ExpressionAttributeValues[":" + keyName] = updateAttributes[
      key
    ] as AttributeValue;
    UpdateExpressionList.push(`#${keyName} = :${keyName}`);
  }

  const { Attributes } = await dynamoClient
    .update({
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      Key: key,
      ReturnValues: "ALL_NEW",
      TableName: tableName,
      UpdateExpression: "SET " + UpdateExpressionList.join(", "),
    })
    .promise();

  return Attributes as T;
};
