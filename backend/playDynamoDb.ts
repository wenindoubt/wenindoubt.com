import { APIGatewayProxyHandler } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const ddb = new DocumentClient({ apiVersion: '2012-08-10' });

export const getGoogleFrameworks: APIGatewayProxyHandler = async () => {
  const params: DocumentClient.QueryInput = {
    TableName: process.env.PLAY_TABLE,
    KeyConditionExpression: '#PK = :PK',
    ExpressionAttributeNames: {
      '#PK': 'pk'
    },
    ExpressionAttributeValues: {
      ':PK': 'ORG#b273819f-5aa0-4692-bbc3-445e5822629c'
    }
  };

  const { Items } = await ddb.query(params).promise();

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: Items,
        path: 'HTTP GET -> API Gateway -> AWS lambda -> DynamoDB'
      },
      null,
      2
    )
  };
};
