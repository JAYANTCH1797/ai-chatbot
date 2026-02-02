import { mockSuggestions } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const documentId = searchParams.get("documentId");

  if (!documentId) {
    return Response.json({ error: "Parameter documentId is required." }, { status: 400 });
  }

  return Response.json(mockSuggestions, { status: 200 });
}
