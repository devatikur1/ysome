# YSOME

YSOME is a Firebase-powered React application that recreates the modern YouTube viewing experience. It layers real-time YouTube Data API results with RapidAPI-powered metadata, while persisting user activity—likes, subscriptions, history—inside Firestore. Motion-enabled transitions, contextual overlays, and responsive layouts give the app a polished feel across desktop and mobile.

## Feature Highlights

- **Personalised feed:** Aggregates multiple keyword queries and streams results with infinite scroll backed by sequential API key rotation.
- **Immersive watch page:** RapidAPI detail fetch, channel insights, recommended videos, and comment threads with lazy loading.
- **Authenticated workspace:** Google sign-in, persistent profile, and counters for likes, subscriptions, and history.
- **Content collections:** Firestore sub-collections (`like`, `sub`, `his`) store saved videos with optimistic UI updates.
- **Search overlays & notifications:** Motion-driven modals, recent query memory, and mobile-friendly bottom navigation.
- **Skeleton loaders:** Custom skeleton states keep transitions smooth during network requests.

## Tech Stack

- `React 19`, `React Router 7.9` for routing and layout control
- Context API for global state: `AppContext`, `FirebaseContext`, `UiContext`
- `Firebase Auth` + `Firestore` for authentication and persistence
- YouTube Data API v3 & RapidAPI (`youtube-media-downloader`) for media data
- `TailwindCSS`, `lucide-react`, `motion/react`, `moment`, `millify`, `clsx`
- `@vercel/speed-insights` for client-side performance telemetry

## Project Layout

- `src/layout/` – App and home shells, responsive scaffolding
- `src/components/` – Feature-specific UI such as random feeds, watch interface, profile sections, shared utilities
- `src/contexts/` – Providers encapsulating UI state, Firebase bindings, and API orchestration
- `src/pages/` – Route-level screens (`/`, `/watch`, `/channel/:id`, `/liked`, `/history`, `/you`, `/search`, etc.)
- `src/utils/` – API wrappers, parsing helpers, username generator, and environment-driven key management

## Environment Setup

- **Prerequisites:** Node.js 18+ and npm
- Install dependencies:
  - `npm install`
- Create `.env.local` (or `.env`) in the project root with the variables below, then restart the dev server.

| Variable                                | Purpose                                                            |
| --------------------------------------- | ------------------------------------------------------------------ |
| `REACT_APP_FIREBASE_API_KEY`            | Firebase project API key                                           |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`        | Firebase auth domain                                               |
| `REACT_APP_FIREBASE_PROJECT_ID`         | Firebase project ID                                                |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`     | Firebase storage bucket                                            |
| `REACT_APP_FIREBASE_MESSAGINGSENDER_ID` | Firebase messaging sender ID                                       |
| `REACT_APP_FIREBASE_APP_ID`             | Firebase web app ID                                                |
| `REACT_APP_KEY1` – `REACT_APP_KEY8`     | YouTube Data API v3 keys, consumed sequentially for quota rollover |
| `REACT_APP_VIDEO_DETAILS_FN_KEY`        | RapidAPI key for `youtube-media-downloader` video details          |
| `REACT_APP_RELATE_VIDEOS_FN_KEY`        | RapidAPI key for related video lookups                             |

You can supply fewer YouTube keys if quota consumption is low; adjust `src/contexts/App/AppContextProvider.jsx` accordingly.

## Firebase & Firestore

1. Create a Firebase project, enable **Email/Password** (optional) and **Google** providers under Authentication.
2. Create a Firestore database in **production mode** (or add rules that restrict access to authenticated users).
3. Expected collections:
   - `loggedUserData/{userEmail}` – main profile document created at first login.
   - `usd/{userEmail}/like|sub|his/{videoId}` – sub-collections storing detailed entry payloads with `uid`, `publishedAt`, and video/channel snapshot data.
4. Update security rules to ensure users can only read/write their own subtree.

## External API Usage

- **YouTube Data API v3:** Fetches search results, video statistics, channel metadata, and comment threads.
- **RapidAPI – youtube-media-downloader:** Supplies rich video detail payloads, direct stream metadata, and paginated related videos. Ensure the RapidAPI subscription tier supports anticipated usage.

## Available Scripts

- `npm start` – Run the development server at `http://localhost:3000`.
- `npm run build` – Produce an optimized production bundle.
- `npm test` – Launch the default React Testing Library runner (no custom tests currently).
- `npm run eject` – Eject CRA configuration (irreversible).

## Development Notes

- Context providers are nested in `src/index.js`; wrap new features inside the existing providers to reuse global state.
- Tailwind theme tokens (e.g., `bg`, `surface`, `accent`) are defined in `tailwind.config.js` and used across components.
- Skeleton components live under `src/components/custom/LoadingComponent.jsx` for consistent loading states.
- Search overlay maintains recent queries in `localStorage` (`queries` key); clear it for a fresh state.
- Local login state persists via `localStorage.logged`; clear it when testing auth flows.

## Roadmap Ideas

- Add server-side functions to sync Firestore counts instead of client-side increments.
- Implement granular Firestore pagination for large histories.
- Provide automated testing around context logic and API fallbacks.
- Extend upload/create modals once video publishing is supported.

---

Need help or want to extend the platform? Start by reviewing the context providers and utils—they control data flow across the app.
