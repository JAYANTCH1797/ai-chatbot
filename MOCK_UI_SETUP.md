# Mock UI Setup

This project has been converted to a fully mock UI that doesn't require any backend dependencies. All API calls and database operations are replaced with mock data.

## What's Been Changed

### 1. **Authentication Removed** ✅
- Removed NextAuth configuration requirements
- No database or auth secrets needed
- Mock user is used throughout the app
- Middleware simplified to allow all access

### 2. **API Routes Mocked** ✅
- `/api/history` - Returns mock chat history
- `/api/vote` - Returns mock votes
- `/api/suggestions` - Returns mock suggestions
- `/api/document` - Returns mock documents
- `/api/files/upload` - Returns mock file upload responses
- `/api/chat` - Uses MockChatTransport for streaming

### 3. **Chat Transport Mocked** ✅
- Created `MockChatTransport` class that streams mock responses
- Simulates real AI responses with text-delta and artifact events
- Provides streaming effect with delays between chunks
- Located at: `/lib/mock-chat-transport.ts`

### 4. **Mock Data** ✅
- Mock chat messages with artifacts
- Mock vote data
- Mock suggestions
- Mock chat history
- Mock streaming responses
- Located at: `/lib/mock-data.ts`

### 5. **Server Actions Mocked** ✅
- `updateChatVisibility` - No-op mock
- `deleteTrailingMessages` - No-op mock
- `generateTitleFromUserMessage` - Still uses AI SDK (for title generation)

## Features That Work

### ✅ Working Features
- Full chat UI with message display
- Mock streaming responses from AI
- Artifacts (code blocks) rendering
- Sidebar with mock chat history
- Message input and sending
- Model selector
- Visibility selector (private/public)
- All UI components and interactions

### ⚠️ Limited Features
- File uploads (mocked, not actually stored)
- Chat history (uses mock data, no persistence)
- Votes/ratings (UI only, no backend)
- Message editing (UI only, not persisted)

## How to Use

1. **No Setup Required** - The app works out of the box
2. **No Environment Variables Needed** - No API keys or database URLs required
3. **Just Run** - Start the dev server and access the chat UI

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` and start chatting!

## File Structure

Key mock files:
- `/lib/mock-data.ts` - All mock data definitions
- `/lib/mock-chat-transport.ts` - Mock AI streaming transport
- `/app/(chat)/layout.tsx` - Simplified layout with mock user
- `/app/(chat)/api/` - Simplified API routes with mock responses
- `/components/chat.tsx` - Updated to use MockChatTransport
- `/proxy.ts` - Simplified middleware for mock mode

## Adding Real Backend

To switch back to real backend:

1. **Restore original files** from git history
2. **Add environment variables** for database and auth
3. **Setup authentication** with NextAuth
4. **Configure database** connection
5. **Deploy** as normal

## Customizing Mock Data

Edit `/lib/mock-data.ts` to customize:
- Chat messages and responses
- Streaming content
- Artifacts
- Suggestions
- History

## Performance Notes

- Mock responses stream with realistic delays
- All data is in-memory (resets on page refresh)
- No network delays except simulated ones
- Instant UI rendering (no database latency)

---

**Note**: This is a development/demonstration setup. For production, use the real backend configuration.
