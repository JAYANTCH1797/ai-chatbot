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

export async function* mockWeatherWidgetStream() {
  // Text introduction
  const textChunks = [
    "I've ",
    "created ",
    "an ",
    "interactive ",
    "weather ",
    "widget ",
    "for ",
    "you. ",
    "It ",
    "displays ",
    "current ",
    "temperature, ",
    "conditions, ",
    "and ",
    "a ",
    "5-day ",
    "forecast ",
    "with ",
    "smooth ",
    "animations.",
  ];

  for (const chunk of textChunks) {
    yield {
      type: "text-delta" as const,
      textDelta: chunk,
    };
  }

  // Add the weather widget artifact
  yield {
    type: "artifact" as const,
    artifact: {
      id: "weather-artifact",
      type: "code",
      language: "jsx",
      title: "Interactive Weather Widget",
      content: `'use client';

import React, { useState } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react';

export default function WeatherWidget() {
  const [unit, setUnit] = useState('F');

  const currentWeather = {
    location: 'San Francisco, CA',
    temperature: 72,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    feelsLike: 70,
    uv: 5,
    icon: 'cloud',
  };

  const forecast = [
    { day: 'Mon', high: 75, low: 62, condition: 'Sunny', icon: 'sun' },
    { day: 'Tue', high: 73, low: 61, condition: 'Cloudy', icon: 'cloud' },
    { day: 'Wed', high: 68, low: 58, condition: 'Rainy', icon: 'rain' },
    { day: 'Thu', high: 70, low: 60, condition: 'Sunny', icon: 'sun' },
    { day: 'Fri', high: 76, low: 63, condition: 'Clear', icon: 'sun' },
  ];

  const getIcon = (iconType) => {
    const iconClass = 'w-8 h-8';
    switch (iconType) {
      case 'sun':
        return <Sun className={iconClass + ' text-yellow-400'} />;
      case 'cloud':
        return <Cloud className={iconClass + ' text-gray-400'} />;
      case 'rain':
        return <CloudRain className={iconClass + ' text-blue-400'} />;
      default:
        return <Cloud className={iconClass} />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-2xl shadow-2xl text-white">
      {/* Header with temperature toggle */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">{currentWeather.location}</h2>
          <p className="text-blue-100 text-sm">Last updated: Just now</p>
        </div>
        <button
          onClick={() => setUnit(unit === 'F' ? 'C' : 'F')}
          className="bg-blue-300 bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-lg transition"
        >
          °{unit}
        </button>
      </div>

      {/* Main temperature display */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-7xl font-bold">{currentWeather.temperature}°</div>
          <div>{getIcon(currentWeather.icon)}</div>
        </div>
        <p className="text-2xl text-blue-100 mb-2">{currentWeather.condition}</p>
        <p className="text-blue-100">Feels like {currentWeather.feelsLike}°</p>
      </div>

      {/* Weather details grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-5 h-5" />
            <span className="text-sm text-blue-100">Humidity</span>
          </div>
          <p className="text-2xl font-bold">{currentWeather.humidity}%</p>
        </div>

        <div className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-5 h-5" />
            <span className="text-sm text-blue-100">Wind Speed</span>
          </div>
          <p className="text-2xl font-bold">{currentWeather.windSpeed} mph</p>
        </div>

        <div className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5" />
            <span className="text-sm text-blue-100">Visibility</span>
          </div>
          <p className="text-2xl font-bold">{currentWeather.visibility} mi</p>
        </div>

        <div className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5" />
            <span className="text-sm text-blue-100">Pressure</span>
          </div>
          <p className="text-2xl font-bold">{currentWeather.pressure} mb</p>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div>
        <h3 className="text-lg font-semibold mb-4">5-Day Forecast</h3>
        <div className="grid grid-cols-5 gap-2">
          {forecast.map((day, idx) => (
            <div
              key={idx}
              className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-opacity-50 transition"
            >
              <p className="font-semibold text-sm mb-2">{day.day}</p>
              <div className="flex justify-center mb-2">{getIcon(day.icon)}</div>
              <p className="text-xs text-blue-100 mb-2">{day.condition}</p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="font-bold">{day.high}°</span>
                <span className="text-blue-200">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
    },
  };
}
