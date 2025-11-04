# YSOME - Web Application Notes

## Project Overview

একটি YouTube-like video streaming platform যেটা React JS, Firebase, এবং YouTube API ব্যবহার করে তৈরি করা হয়েছে।

---

## Tech Stack

- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 7.9.4
- **Styling**: Tailwind CSS 3.4.18
- **Backend/Firebase**: Firebase 12.4.0 (Authentication + Firestore)
- **Animation**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React 0.546.0
- **Other Libraries**:
  - Millify (number formatting)
  - Moment.js (date formatting)
  - Clsx (conditional classes)

---

## Main Features

### 1. Home Page (Random Videos Page)

- YouTube API দিয়ে video search করে random videos দেখায়
- Multiple search queries ব্যবহার করে (Pokemon theme songs related)
- Grid layout: Responsive (1-4 columns based on screen size)
- Infinite scroll: Scroll করলে automatically নতুন videos load হয়
- Auto-loads videos when scrolling reaches 90% of page
- Video cards show: thumbnail, title, channel info, view count, publish date

### 2. Shorts Page

- Vertical video feed (TikTok/YouTube Shorts style)
- Full-screen video player
- Navigation:
  - Mouse wheel scroll (up/down)
  - Keyboard arrows (↑/↓)
  - Navigation buttons (Previous/Next)
- Auto-loads more videos when near end
- Snap scrolling behavior

### 3. Video Player Page (/watch)

- Main video player with YouTube videos
- Video details: title, description, views, likes, comments
- Channel information: subscriber count, channel avatar
- Comments section:
  - Shows video comments
  - Load more comments button
  - Infinite scroll for comments
- Related videos sidebar:
  - Shows recommended videos
  - Infinite scroll for recommendations
- Uses RapidAPI for video details (alternative to YouTube API)

### 4. Subscriptions Page (/channel)

- Shows all subscribed channels
- Sorting options:
  - Oldest first
  - Latest first
  - A-Z alphabetical
- Channel cards with thumbnails and info

### 5. Search Functionality

- Search bar in header
- Search modal overlay
- Search YouTube videos
- Shows search results

### 6. User Authentication (Firebase)

- Google Sign-In integration
- User profile picture in header
- Authentication state management
- Firebase Firestore for user data storage

### 7. Header Features

- Logo (YSOME)
- Search button
- Notification bell (when logged in)
- Create/Upload button (when logged in)
- Sign in button (when not logged in)
- User profile picture (when logged in)
- Sidebar toggle button (menu icon)

### 8. Sidebar

- Navigation menu
- Home, Shorts, Subscriptions links
- Menu items with icons
- Responsive: Hidden on mobile, toggleable on desktop

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header/         # Header and search/notification components
│   ├── sidebar/        # Sidebar navigation
│   ├── randomVideosComponent/    # Video grid cards
│   ├── RandomShortsComponent/    # Shorts video player
│   ├── PlayVideoInterFaceComponent/  # Video player page components
│   ├── SubscriptionsComponent/   # Subscriptions page components
│   └── custom/         # Empty page, No internet components
│
├── contexts/           # React Context API
│   ├── App/           # App-wide state (videos, API keys, loading)
│   ├── Firebase/       # Firebase auth and Firestore
│   └── Ui/            # UI state (sidebar, search, notifications)
│
├── pages/              # Main page components
│   ├── RandomVideosPage.jsx      # Home page
│   ├── RandomShortsPage.jsx      # Shorts page
│   ├── PlayVideoInterFacePage.jsx # Video player page
│   ├── SubscriptionsPage.jsx     # Subscriptions page
│   └── CreatePage.jsx            # Create/Upload page (placeholder)
│
├── layout/             # Layout wrappers
│   ├── AppLayout.jsx   # Main app layout (header + outlet)
│   └── HomeLayout.jsx # Home layout (sidebar + content)
│
├── utils/              # Utility functions
│   ├── GetVideoData.js           # Fetch video details
│   ├── GetChannelData.js         # Fetch channel details
│   ├── GetDataWithSearch.js      # Search YouTube videos
│   ├── GetVideoDetails.js        # RapidAPI video details
│   ├── GetRelateVideos.js        # Related videos
│   ├── GetCommentThreads.js      # Video comments
│   ├── GetShortsData.js          # Shorts data
│   ├── ParseMillified.js         # Parse view counts
│   └── addImageInStorage.js      # Firebase storage helper
│
└── assets/             # Images, logos, icons
```

---

## API Integration

### YouTube Data API v3

- Multiple API keys for fallback (8 API keys)
- Auto-switches to next API key if one fails
- Used for:
  - Video search
  - Video details
  - Channel information
  - Comments

### RapidAPI

- Alternative API for video details
- Used when YouTube API fails or unavailable
- Faster video details fetching

---

## State Management

### AppContext

- Video items and data
- Channel data
- API keys management
- Loading states
- Error handling
- Fetch functions

### FirebaseContext

- User authentication
- User data (profile, subscriptions)
- Google Sign-In
- Firestore operations

### UiContext

- Sidebar visibility
- Search modal state
- Notification modal state
- Page dimensions
- Responsive layout calculations

---

## Routing

- `/` - Home page (Random Videos)
- `/shorts/*` - Shorts page (vertical videos)
- `/watch?v=VIDEO_ID` - Video player page
- `/channel` - Subscriptions page
- `*` - 404 page

---

## Key Functionalities

### Video Loading

1. Initial load: Fetches videos based on predefined queries
2. Infinite scroll: Auto-loads more when scrolling
3. Pagination: Uses nextPageToken from YouTube API
4. Deduplication: Prevents showing same video twice

### Responsive Design

- Mobile: Single column, hidden sidebar
- Tablet: 2 columns, toggleable sidebar
- Desktop: 3-4 columns, persistent sidebar
- Breakpoints: 768px, 1024px, 1920px

### Error Handling

- API key rotation (8 fallback keys)
- Network error detection
- Retry mechanism
- No internet component display

### Performance

- Lazy loading videos
- Caching channel/video data
- Debounced scroll events
- Optimized re-renders

---

## Firebase Features

### Authentication

- Google Sign-In
- User session management
- Protected routes (future)

### Firestore

- User subscriptions storage
- User preferences
- Liked videos (future)

---

## UI/UX Features

- Dark theme (default)
- Smooth animations (Motion/Framer Motion)
- Loading skeletons
- Empty states
- Error states with retry
- Click outside to close modals
- Keyboard navigation (arrow keys for shorts)

---

## Environment Variables Needed

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGINGSENDER_ID
REACT_APP_FIREBASE_APP_ID
```

---

## Build & Deploy

- Development: `npm start`
- Production: `npm run build`
- Testing: `npm test`
- Deployed with: Vercel (Speed Insights integrated)

---

## Current Limitations / Future Improvements

- Search functionality needs completion
- Create/Upload page is placeholder
- No video upload functionality yet
- Limited to predefined search queries
- No user playlists
- No video history
- No video likes/dislikes (stored locally)

---

## Notes

- App name: YSOME (or ymore)
- Currently focused on Pokemon theme song videos (can be changed)
- Uses multiple API keys for reliability
- Responsive design for all screen sizes
- Modern React patterns (Hooks, Context API)
- Clean component architecture
