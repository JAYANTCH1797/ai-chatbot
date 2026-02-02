import { mockHistory } from "@/lib/mock-data";

export async function GET() {
  return Response.json({
    chats: mockHistory,
    hasMore: false,
  });
}

export async function DELETE() {
  return Response.json({ success: true });
}
