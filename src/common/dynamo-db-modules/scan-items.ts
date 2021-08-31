import { TableNames } from "../constants";
import { dynamoClient } from "../utils/aws";

import { LastEvaluatedKeyType } from "../../types/constants";

export const scanItems = async <T>(tableName: TableNames): Promise<T[]> => {
  const items: T[] = [];
  let lek: LastEvaluatedKeyType;

  do {
    const { Items, LastEvaluatedKey } = await dynamoClient
      .scan({
        ExclusiveStartKey: lek,
        TableName: tableName,
      })
      .promise();

    items.push(...(Items as T[]));
    lek = LastEvaluatedKey;
  } while (lek);

  return items;
};
