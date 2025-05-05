# Pokémon Explorer Challenge

## Project Overview

Welcome to the Pokémon Explorer challenge! In this exercise, you'll build a minimal full-stack application that allows users to search for Pokémon by name and display their basic information.

**Why this challenge?** This exercise evaluates your skills in:

- API routing and data transformation
- React state management and hooks
- Error handling
- Communication of technical decisions

## Prerequisites

- Node.js ≥ 14
- Internet access (to fetch from PokeAPI)

## Repository Layout

pokemon-explorer-challenge/
├── backend/ # Express server
│ ├── package.json
│ ├── index.js # Server entry point
│ └── routes/
│ └── pokemon.js # Pokemon API routes (TODO)
├── frontend/ # Next.js application
│ ├── package.json
│ └── pages/
│ └── index.js # Main page component (TODO)
├── .gitignore
└── README.md # This file

## Getting Started

Clone and install dependencies
git clone git@github.com:your-org/pokemon-explorer-challenge.git
cd pokemon-explorer-challenge
In one terminal: launch backend
cd backend && npm install && npm start
In another terminal: launch frontend
cd frontend && npm install && npm run dev

The backend will run on http://localhost:3001
The frontend will run on http://localhost:3000

## Your Tasks

### Backend Task

Implement the GET `/api/pokemon/:name` endpoint in `backend/routes/pokemon.js`:

1. Fetch Pokémon data from the PokeAPI (https://pokeapi.co/api/v2/pokemon/{name})
2. Transform the response to include only:
   - name
   - sprite (front_default image URL)
   - types (array of type names)
3. Handle errors appropriately (404 for Pokémon not found, 500 for server errors)

### Frontend Task

Implement the `fetchPokemon()` function in `frontend/pages/index.js`:

1. Call your backend API with the user's input
2. Manage loading, success, and error states
3. Display the Pokémon information in a user-friendly way

## Timebox & Workflow

You have 60 minutes for this challenge. Here's a suggested approach:

- First 25 minutes: Create a working end-to-end stub (hardcoded responses are fine)
- Next 35 minutes: Implement real logic and polish the UI

Make small, descriptive commits as you go (e.g., "feat: stubbed pokemon route", "fix: add loading state").

## Evaluation Criteria

| Criterion               | What to Show                                                     |
| ----------------------- | ---------------------------------------------------------------- |
| Spec Understanding      | Asks about input validation, 404 vs. network errors              |
| Code Organization       | Clear separation of route logic vs. helpers; component structure |
| Error Handling          | Handles non-200 responses, invalid input gracefully              |
| React Patterns          | Correct use of hooks; avoids unnecessary re-renders              |
| UX States               | Loading spinner/text; disabled button; clear error messaging     |
| Communication & Process | Verbalizes trade-offs; sketches data flow                        |
| (Bonus) Testing         | One small unit test for backend or frontend                      |

## Tips & Hints

- **Stub First**: Return hard-coded JSON so you can wire UI to API quickly.
- **Incremental**: Swap in real fetch logic only after stub is working.
- **Ask Questions**: Clarify edge cases—capitalization, timeouts, caching.

## Submission

When time is up, push your solution to a feature branch and share the link. Be prepared to walk through your solution and discuss your approach.

Good luck!
