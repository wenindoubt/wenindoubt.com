import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless Webpack (Typescript) v1.0!',
        input: event
      },
      null,
      2
    )
  };
};

export const playLambda: APIGatewayProxyHandler = async () => {
  const messages: string[] = [
    "I'm just getting started here!",
    'You want some more?',
    'Hey there big fella',
    'Yeehawww!'
  ];
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: messages[Math.floor(Math.random() * messages.length)],
        path: 'HTTP GET -> API Gateway -> AWS lambda'
      },
      null,
      2
    )
  };
};
