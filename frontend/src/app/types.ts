export interface PlayLambda {
  message: string;
  path: string;
}

export interface PlayDynamoDb {
  message: { data: string; pk: string; sk: string }[];
  path: string;
}
