import { DocumentClient } from "aws-sdk/clients/dynamodb";
import SecretsManager from "aws-sdk/clients/secretsmanager";
import SES from "aws-sdk/clients/ses";
import SQS from "aws-sdk/clients/sqs";

const AWS_REGION = "ap-northeast-2";

export const dynamoClient = new DocumentClient({
  region: AWS_REGION,
});

export const ses = new SES({
  region: AWS_REGION,
});

export const secretsManager = new SecretsManager({
  region: AWS_REGION,
});

export const sqs = new SQS({
  region: AWS_REGION,
});
