# API Application (NestJS)

This is the backend API application built with NestJS, Node.js, TypeScript, Postgres, and Redis.

## Directory Structure

- `src/` - Source code
  - `modules/` - Feature modules
    - `auth/` - Authentication module (JWT, Passport)
    - `users/` - User management module
    - `resumes/` - Resume management module
    - `ats/` - ATS (Applicant Tracking System) module
    - `jobs/` - Job management module
  - `database/` - Database configuration and migrations
    - `migrations/` - TypeORM migrations
    - `seeds/` - Database seed files
  - `queues/` - Background job processing
    - `processors/` - Bull queue processors
- `test/` - Test files

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL with TypeORM
- **Queue**: Redis with BullMQ
- **Authentication**: JWT with Passport

## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL
- Redis

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=autoresume

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=your-secret-key

# Frontend
FRONTEND_URL=http://localhost:3000
```

### Running the Application

```bash
# Development
npm run dev

# Production
npm run build
npm run start:prod
```

### API Endpoints

- `GET /` - API health check
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /users` - Get all users
- `GET /resumes` - Get all resumes
- `POST /resumes` - Create new resume
- `GET /jobs` - Get all jobs
- `POST /ats/analyze` - Analyze resume with ATS
