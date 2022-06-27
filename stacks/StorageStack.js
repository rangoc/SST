import { Table } from "@serverless-stack/resources";

export function StorageStack({stack, app}) {
    // Create DynamoDB table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string",
        },
        primaryIndex: {partitionKey: "userId", sortKey: "noteId"},
    });

    return {
        table,
    };
}
