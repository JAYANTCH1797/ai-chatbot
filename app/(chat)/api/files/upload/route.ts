import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.body === null) {
    return new Response("Request body is empty", { status: 400 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as Blob;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Mock file upload - just return a mock URL
    const filename = (formData.get("file") as File).name;

    return NextResponse.json({
      url: `https://example.com/uploads/${filename}`,
      downloadUrl: `https://example.com/uploads/${filename}`,
    });
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
