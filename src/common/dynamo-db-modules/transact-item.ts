import {
  ExpressionAttributeNameMap,
  ExpressionAttributeValueMap,
  Key,
  PutItemInputAttributeMap,
  TransactWriteItem,
} from "aws-sdk/clients/dynamodb";

import { TableNames } from "../constants";

export const createTransactPutItem = <T>(input: {
  item: Partial<T>;
  tableName: TableNames;
}): TransactWriteItem => {
  const { item, tableName } = input;

  return {
    Put: {
      Item: item as PutItemInputAttributeMap,
      TableName: tableName,
    },
  };
};

export const createTransactUpdateItem = <T>(input: {
  key: Partial<T>;
  tableName: TableNames;
  updateAttributes?: Partial<T>;
  addAttributes?: Partial<T>;
}): TransactWriteItem => {
  const { addAttributes, key, tableName, updateAttributes } = input;

  const ExpressionAttributeNames: ExpressionAttributeNameMap = {};
  const ExpressionAttributeValues: ExpressionAttributeValueMap = {};
  const updateItemList: string[] = [];
  const addItemList: string[] = [];
  const [keyAttribute] = Object.keys(key);

  if (!addAttributes && !updateAttributes) {
    throw new Error("No Items to update");
  }

  updateAttributes && Reflect.deleteProperty(updateAttributes, keyAttribute);
  addAttributes && Reflect.deleteProperty(addAttributes, keyAttribute);

  if (updateAttributes) {
    for (const key in updateAttributes) {
      if (updateAttributes[key] === undefined) {
        continue;
      }

      ExpressionAttributeNames["#" + key] = key;
      ExpressionAttributeValues[":" + key] = updateAttributes[key]!;
      updateItemList.push(`#${key} = :${key}`);
    }
  }

  if (addAttributes) {
    for (const key in addAttributes) {
      if (addAttributes[key] === undefined) {
        continue;
      }

      ExpressionAttributeNames["#" + key] = key;
      ExpressionAttributeValues[":" + key] = addAttributes[key]!;
      addItemList.push(`#${key} :${key}`);
    }
  }

  const UpdateExpression =
    updateAttributes && addAttributes
      ? "ADD " + addItemList.join(", ") + " SET " + updateItemList.join(", ")
      : updateAttributes
      ? "SET " + updateItemList.join(", ")
      : "ADD " + addItemList.join(", ");

  return {
    Update: {
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      Key: key as Key,
      TableName: tableName,
      UpdateExpression,
    },
  };
};

export const createTransactDeleteItem = <T>(input: {
  key: Partial<T>;
  tableName: TableNames;
}): TransactWriteItem => {
  const { key, tableName } = input;

  return {
    Delete: {
      Key: key as Key,
      TableName: tableName,
    },
  };
};
