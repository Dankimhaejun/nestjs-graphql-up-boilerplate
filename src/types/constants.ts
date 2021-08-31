import { DocumentClient, TransactWriteItem } from "aws-sdk/clients/dynamodb";
import { SendEmailRequest } from "aws-sdk/clients/ses";

export type LastEvaluatedKeyType = DocumentClient.Key | undefined;

export type TransactWriteItemType = TransactWriteItem;

export type SendEmailRequestType = SendEmailRequest;
