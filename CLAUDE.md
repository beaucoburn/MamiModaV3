# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MamiModaV3 is a full-stack e-commerce solution built with a three-tier architecture:

- **Frontend**: Next.js 15 storefront (`solace-medusa-starter/`) 
- **Backend API**: Medusa 2.0 e-commerce server (`solace-medusa-starter-api/`)
- **CMS**: Strapi headless CMS (`solace-medusa-starter-strapi/`)

## Development Commands

### Frontend (solace-medusa-starter/)
```bash
cd solace-medusa-starter/
npm run dev          # Start development server on port 8000
npm run build        # Build for production
npm run start        # Start production server on port 8000
npm run lint         # Run ESLint
npm run format       # Check code formatting with Prettier
npm run format:write # Format code with Prettier
npm run test-e2e     # Run Playwright end-to-end tests
npm run test:serial  # Run Playwright tests with single worker
```

### Backend API (solace-medusa-starter-api/)
```bash
cd solace-medusa-starter-api/
yarn dev               # Start development server
yarn build             # Build the project
yarn start             # Start production server
yarn seed              # Seed database with sample data
yarn db:init           # Initialize database (migrate, sync-links, seed)
yarn db:migrate        # Run database migrations
yarn db:sync-links     # Sync database links
yarn test:unit         # Run unit tests
yarn test:integration:http     # Run HTTP integration tests
yarn test:integration:modules  # Run module integration tests
```

### CMS (solace-medusa-starter-strapi/)
```bash
cd solace-medusa-starter-strapi/
npm run develop  # Start development server with auto-reload
npm run start    # Start production server
npm run build    # Build admin panel
npm run deploy   # Deploy to Strapi Cloud
```

## Architecture Notes

### Frontend Structure
- **Next.js App Router**: Route-based organization under `src/app/[countryCode]/`
- **Modular Components**: Component modules organized by feature in `src/modules/`
- **Data Layer**: Server actions and API calls in `src/lib/data/`
- **Hooks**: Custom React hooks in `src/lib/hooks/`
- **Styling**: Tailwind CSS with custom theme configuration

### Backend Structure  
- **Medusa 2.0**: Modern e-commerce framework with modular architecture
- **Custom Modules**: Resend notifications in `src/modules/resend-notification/`
- **API Routes**: Custom endpoints in `src/api/`
- **Workflows**: Custom business logic workflows in `src/workflows/`
- **Database**: PostgreSQL with MikroORM

### CMS Structure
- **Strapi 5.0**: Headless CMS with custom content types
- **Content Types**: Blog, FAQ, Homepage, Collections, Product variants
- **Components**: Reusable content components for flexible page building
- **API Integration**: RESTful API consumed by Next.js frontend

## Key Integration Points

- **Search & Filtering**: Custom search middleware in API (`src/api/middlewares.ts`) required for frontend functionality
- **Content Management**: Strapi webhook revalidation for real-time content updates
- **Payment Processing**: Stripe integration in checkout flow
- **Email Notifications**: Resend integration for transactional emails

## Testing

- **E2E Tests**: Playwright tests covering user journeys in `e2e/tests/`
- **Integration Tests**: Backend API integration tests with Jest
- **Test Data**: Database seeding and reset utilities in `e2e/data/`

## Environment Requirements

- Node.js >= 20
- PostgreSQL database
- Required environment variables for API keys (Medusa, Strapi, Stripe, etc.)