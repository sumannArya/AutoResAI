# AutoResume AI

AI-powered resume optimization and job matching platform built as a TypeScript monorepo using Turborepo.

## Project Structure

```
autoresume-ai/ (Monorepo: TypeScript, Turborepo)
├─ apps/
│  ├─ web/ (Frontend: Next.js, React, TS, Tailwind)
│  │  ├─ app/ (Auth, Dashboard, Marketing – React RSC)
│  │  ├─ components/ (UI, Resume, Jobs – React)
│  │  ├─ lib/ hooks/ styles/ public/
│  │  └─ middleware.ts (Next Edge)
│  └─ api/ (Backend: NestJS/Express, Node, TS)
│     ├─ modules/ (auth, users, resumes, ats, jobs)
│     ├─ database/ (Postgres, Prisma/TypeORM)
│     └─ queues/ (Redis, BullMQ)
```

## Tech Stack

### Frontend (apps/web)
- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Features**: Server Components, Edge Middleware

### Backend (apps/api)
- **Framework**: NestJS
- **Runtime**: Node.js
- **Language**: TypeScript
- **Database**: PostgreSQL with TypeORM
- **Queue**: Redis with BullMQ
- **Authentication**: JWT with Passport

### Monorepo Tools
- **Build System**: Turborepo
- **Package Manager**: npm workspaces
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL (for API)
- Redis (for API queues)

### Installation

```bash
# Install dependencies for all workspaces
npm install
```

### Development

```bash
# Run all apps in development mode
npm run dev

# Run specific app
npm run dev --filter=web
npm run dev --filter=api
```

### Build

```bash
# Build all apps
npm run build

# Build specific app
npm run build --filter=web
npm run build --filter=api
```

### Linting

```bash
# Lint all apps
npm run lint
```

### Testing

```bash
# Run all tests
npm run test
```

## Project Details

### Apps

- **web** - Next.js frontend application
  - See [apps/web/README.md](apps/web/README.md) for details
- **api** - NestJS backend API
  - See [apps/api/README.md](apps/api/README.md) for details

### Features

- 🔐 Authentication & Authorization
- 📝 Resume Builder & Editor
- 🤖 AI-powered Resume Optimization
- 📊 ATS (Applicant Tracking System) Score Analysis
- 💼 Job Listing & Management
- 🎯 Job Matching Algorithm
- 📧 Email Notifications (Background Jobs)
- 🔄 Real-time Updates

## License

MIT