import type { ChatMessage } from "@/lib/types";

export const mockChatMessages: ChatMessage[] = [
  {
    id: "msg-1",
    role: "user",
    content: "Create a React component for a weather widget",
    parts: [
      {
        type: "text" as const,
        text: "Create a React component for a weather widget",
      },
    ],
  },
  {
    id: "msg-2",
    role: "assistant",
    content: "I'll create a beautiful weather widget component for you.",
    parts: [
      {
        type: "text" as const,
        text: "I'll create a beautiful weather widget component for you.",
      },
      {
        type: "document" as const,
        document: {
          type: "code",
          language: "jsx",
          title: "WeatherWidget.tsx",
          id: "weather-widget-1",
          content: `import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

export function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: 72,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    location: 'San Francisco, CA'
  });

  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 text-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold">{weather.location}</h2>
          <p className="text-blue-100">{weather.condition}</p>
        </div>
        <Cloud className="w-12 h-12" />
      </div>

      <div className="text-5xl font-bold mb-6">{weather.temp}°</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 bg-opacity-50 rounded p-3">
          <div className="flex items-center gap-2 mb-1">
            <Wind className="w-4 h-4" />
            <span className="text-sm">Wind</span>
          </div>
          <p className="text-lg font-semibold">{weather.windSpeed} mph</p>
        </div>
        <div className="bg-blue-500 bg-opacity-50 rounded p-3">
          <div className="flex items-center gap-2 mb-1">
            <CloudRain className="w-4 h-4" />
            <span className="text-sm">Humidity</span>
          </div>
          <p className="text-lg font-semibold">{weather.humidity}%</p>
        </div>
      </div>
    </div>
  );
}`,
        },
      },
    ],
  },
];

export const mockVotes = [
  {
    id: "vote-1",
    chatId: "chat-1",
    messageId: "msg-2",
    isUpvoted: true,
  },
];

export const mockSuggestions = [
  "Create a todo app",
  "Build a landing page",
  "Make a calculator",
  "Design a dashboard",
];

export const mockHistory = [
  {
    id: "chat-1",
    title: "Weather Widget Component",
    createdAt: new Date(Date.now() - 86400000),
    userId: "user-1",
  },
  {
    id: "chat-2",
    title: "Todo App with Hooks",
    createdAt: new Date(Date.now() - 172800000),
    userId: "user-1",
  },
  {
    id: "chat-3",
    title: "Responsive Landing Page",
    createdAt: new Date(Date.now() - 259200000),
    userId: "user-1",
  },
];

export async function* mockChatStream() {
  yield {
    type: "text-delta" as const,
    textDelta: "I'll ",
  };
  yield {
    type: "text-delta" as const,
    textDelta: "create ",
  };
  yield {
    type: "text-delta" as const,
    textDelta: "a ",
  };
  yield {
    type: "text-delta" as const,
    textDelta: "beautiful ",
  };
  yield {
    type: "text-delta" as const,
    textDelta: "React ",
  };
  yield {
    type: "text-delta" as const,
    textDelta: "component ",
  };
  yield {
    type: "text-delta" as const,
    textDelta: "that showcases modern UI patterns and best practices.",
  };

  yield {
    type: "artifact" as const,
    artifact: {
      id: "artifact-1",
      type: "code",
      language: "jsx",
      title: "Modern React Component",
      content: `import React from 'react';

export default function ModernComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello React</h1>
        <p className="text-gray-600 mb-6">This is a beautiful, modern React component with Tailwind CSS styling.</p>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}`,
    },
  };
}
