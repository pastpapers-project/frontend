// src/app/api/paper/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { CosmosClient } from "@azure/cosmos";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const client = new CosmosClient({
      endpoint: process.env.COSMOS_ENDPOINT || "",
      key: process.env.COSMOS_KEY || "",
    });

    const database = client.database("pastpapers");
    // Try both containers since we don't know if it's O level or A level
    const containers = [
      database.container("Olevels"),
      database.container("Alevels")
    ];

    let paper = null;

    for (const container of containers) {
      try {
        const { resource } = await container.item(id, id).read();
        if (resource) {
          paper = resource;
          break;
        }
      } catch (e) {
        // Continue to next container if not found
        continue;
      }
    }

    if (!paper) {
      return NextResponse.json(
        { error: "Paper not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(paper);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch paper" },
      { status: 500 }
    );
  }
}