// src/lib/database.ts
import { CosmosClient } from "@azure/cosmos";

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT || "",
  key: process.env.COSMOS_KEY || "",
});

const database = client.database("pastpapers");
const olevelsContainer = database.container("Olevels");
const alevelsContainer = database.container("Alevels");

export { database, olevelsContainer, alevelsContainer };
 