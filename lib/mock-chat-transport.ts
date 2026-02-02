import { ChatTransport } from "ai";
import { mockChatStream } from "./mock-data";

export class MockChatTransport implements ChatTransport {
  async makeRequest(request: {
    messages: { role: string; content: string | object[] }[];
    body?: Record<string, unknown>;
    headers?: Record<string, string>;
  }): Promise<ReadableStream<Uint8Array>> {
    const encoder = new TextEncoder();

    return new ReadableStream(async (controller) => {
      try {
        // Simulate a small delay for realism
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Stream mock response chunks
        for await (const chunk of mockChatStream()) {
          if (chunk.type === "text-delta") {
            // Send text delta in the format expected by AI SDK
            const line = `0:${JSON.stringify(["text-delta", chunk.textDelta])}\n`;
            controller.enqueue(encoder.encode(line));

            // Small delay between chunks for visual streaming effect
            await new Promise((resolve) => setTimeout(resolve, 30));
          } else if (chunk.type === "artifact") {
            // Send artifact
            const line = `1:${JSON.stringify(["artifact", chunk.artifact])}\n`;
            controller.enqueue(encoder.encode(line));
          }
        }

        // Send finish message
        const finishLine = `e:["finish"]\n`;
        controller.enqueue(encoder.encode(finishLine));

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    });
  }
}
