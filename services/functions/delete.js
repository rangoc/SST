import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      // 'Key' defines the partition key and sort key of the item to be retrieved
      userId: "123", // The id of the author
      noteId: event.pathParameters.id, // The id of the note from path
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});
