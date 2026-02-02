# Quick Start - Mock UI Chatbot

## Start the App
```bash
npm run dev
```

## Open in Browser
```
http://localhost:3000
```

## What You'll See

### Mock Chat Interface
- **Sidebar** with mock conversation history
- **Chat area** ready for messages
- **Input box** at the bottom
- **Model selector** and visibility options

## Try These Actions

### 1. Send a Message
Type anything in the input box and press Enter. You'll see:
- Message appears in chat
- AI (mock) response streams in real-time
- Code artifacts render beautifully

### 2. View Artifacts
Mock messages include code examples:
- Syntax highlighting
- Copy buttons
- Full artifact viewer

### 3. View History
Click on past conversations in the sidebar:
- Shows mock chat history
- Organized by date
- Demo conversations included

### 4. Change Settings
- **Model selector** - Switch between models
- **Visibility toggle** - Make chats public/private

## Mock Data Features

### Sample Mock Messages
The app includes demo:
- Weather widget component
- React best practices response
- Code artifacts with syntax highlighting

### Streaming Effect
- Text streams in with realistic delays
- Artifacts appear after text
- Natural typing experience

### Chat History
- 3 demo conversations
- Different timestamps
- Different topics

## No Configuration Needed!

✅ No database setup
✅ No API keys
✅ No environment variables
✅ Just `npm run dev` and go!

## Files to Customize

### Change Mock Responses
Edit `/lib/mock-data.ts`:
```typescript
export const mockChatMessages = [...]
export async function* mockChatStream() {...}
export const mockSuggestions = [...]
```

### Change Mock User
Edit `/app/(chat)/layout.tsx`:
```typescript
const mockUser = { ... }
```

### Change UI User Sees
Edit `/components/chat.tsx` and component files

## Tips

1. **Refresh page** - Chat resets (no persistence in mock)
2. **Try uploading** - File upload endpoints return mock URLs
3. **Vote on messages** - UI only, not saved
4. **Edit messages** - UI only, not persisted
5. **Delete chats** - Just UI effect

## Backend Integration

When ready to add real backend:

1. Replace `/lib/mock-chat-transport.ts` with real API calls
2. Update `/app/(auth)/auth.ts` with real auth
3. Add `/app/(chat)/api/chat/route.ts` handler
4. Add database and environment variables
5. Deploy!

## Architecture

```
App Structure (Mock Mode)
├── Layout (with mock user)
├── Chat Component
│   ├── MockChatTransport
│   ├── Messages
│   ├── Input
│   └── Artifact Viewer
├── Sidebar (mock history)
└── API Routes (all return mock data)
    ├── /api/history
    ├── /api/vote
    ├── /api/suggestions
    └── /api/document
```

## Components Working

✅ Chat interface
✅ Message rendering
✅ Artifacts/code blocks
✅ Sidebar navigation
✅ Settings panel
✅ Input component
✅ All UI interactions

## Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

---

**Enjoy the demo! 🚀**
