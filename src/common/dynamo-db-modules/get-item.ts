import { TableNames } from "../constants";
import { dynamoClient } from "../utils/aws";

export const getItem = async <T>(input: {
  tableName: TableNames;
  key: Partial<T>;
}): Promise<T | null> => {
  const { tableName, key } = input;
  const keyValues = Object.values(key);

  if (keyValues.includes(undefined)) {
    return null;
  }

  const { Item } = await dynamoClient
    .get({
      Key: key,
      TableName: tableName,
    })
    .promise();

  if (Item) {
    return Item as T;
  }

  return null;
};
