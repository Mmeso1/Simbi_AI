# Welcome to Simbi 🎓💡

Meet **Simbi**, your AI‐powered study buddy that’s got your back from sign-in to sign-off. Simbi brings structure, motivation, and a touch of personality to your learning journey. Whether you need help staying consistent with your study goals, racing the clock on a Pomodoro-style session, or chatting through a tough topic, Simbi is designed to guide, track, and cheer you on.

Simbi isn’t just functional — she’s friendly, focused, and fast. With seamless timers, session tracking, and a chat interface powered by AI, you can learn better, smarter, and with more joy.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the App](#running-the-app)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [API Endpoints](#api-endpoints)
8. [State Management](#state-management)
9. [Persisted Timer Flow](#persisted-timer-flow)
10. [Testing](#testing)
11. [Contributing](#contributing)
12. [License](#license)
13. [Contact](#contact)

---

## Project Overview

The **Simbi Study App** is a smart frontend for learners who need structure, accountability, and motivation. With a personalized dashboard, daily timer, milestone tracking, and AI chat assistant, Simbi makes it easier to build consistent study habits. The app persists timer progress, syncs with the backend, and offers session feedback with an intuitive and responsive interface.

## Features

- **Persistent State**: Timer resumes from where it left off on reload
- **Upcoming Sessions**: Displays sessions for the next 7 days
- **Auth Guard**: JWT token injection with automatic refresh
- **Smart Timer**: Tracks and persists daily study sessions
- **Milestone System**: Automatically logs progress after each session
- **AI Chat Assistant**: Chat with Simbi for study help and encouragement
- **JWT Auth Guard**: Redirects based on token presence and role
- **Responsive UI**: Clean and mobile-friendly layouts
- **User Flow Protection**: Middleware redirects unauthorized users
- **API Integration**: Axios-based dynamic communication with the backend
- **Study Plan Generator**: Generates a study plan for you based on your input

## Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript, CSS, Tailwind CSS
- **State Management**: Zustand
- **API Client**: Axios with interceptors
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or yarn

### Installation

```bash
git clone https://github.com/your-org/simbi.git
cd simbi
npm install
# or
yarn install
```

## Environment Variables

Create a `.env` file in the project root with the following (and any others you need):

```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url
```

## Running App:

```bash
npm run dev
# or
yarn dev
```

## Usage

- Log in with your credentials

- Create a study plan

- View today's session and click Start

- The timer will count down and auto-complete

- Check your updated milestones

- Chat with Simbi

## Project Structure

```text
public/                 # Images
src/
├── api/                # Axios instance and API helpers
│   ├── auth.ts
│   ├── axios.ts
│   ├── chat.ts
│   └── studySession.ts
│
├── app/                # Next.js App Router directories
│   ├── dashboard/
│   ├── auth/
│   ├── sessionsTimer/
│   ├── chat/
│   └── page.tsx
│
├── components/         # Reusable React components
│   ├── dashboard/
│   ├── chatbot/
│   └── sessionTimer/
│
├── data/               # Static data or JSON files
├── hooks/              # Custom React hooks
├── lib/                # Utilities like fonts, configuration
├── store/              # Zustand stores
├── styles/             # Global CSS and CSS modules
├── types/              # TypeScript type definitions
└── utils/              # General helper functions
```

## State Management

We use **Zustand** for global state, which includes:

- `studyPlan` – manages study plans and active session
- `auth` – holds user session data and tokens
- `chat` - holds user session data and tokens
- Additional store slices for personalization etc.

Our components subscribe to the store to read current state and dispatch actions, without prop‑drilling.

---

## Persisted Timer Flow e.g for Timer

1. **On mount:**

   - Read `localStorage.timerState` (JSON with `date` and `timeLeft`).
   - If `date` matches today’s session, restore `timeLeft`; otherwise initialize full duration.

2. **During session:**

   - `setInterval` decrements `timeLeft` by 1 every second while running.

3. **On unload/refresh:**

   - `beforeunload` listener saves `{ date: currentSessionDate, timeLeft }` back to `localStorage`.

4. **On completion (`timeLeft === 0`):**
   - POST to `/study-plan/complete-session`.
   - Update local milestones and reset or advance the timer.

---

## Contributing

1. **Fork** the repository
2. **Clone** your fork
3. Create a new feature branch
4. Open a pull request

Open a pull request

```bash
git clone https://github.com/your-username/simbi.git
cd simbi
npm install
git checkout -b feature/amazing-idea
cd simbi
```

## Contact

We’d love to hear from you! Whether you have feedback, ideas for new features, or you’re interested in contributing to Simbi, feel free to reach out.
