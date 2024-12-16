This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Database Setup

## Prerequisites
- PostgreSQL installed locally
- Node.js (version 18 or higher)
- npm or pnpm

## Setup Steps

### 1. Configure PostgreSQL
1. Create a new PostgreSQL database:
```bash
createdb your_database_name
```

### 2. Set Up Environment Variables
1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Update the database URL in your `.env` file:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/your_database_name"
```

### 3. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 4. Set Up Prisma
1. Run Prisma migrations:
```bash
npx prisma migrate dev
```

2. Generate Prisma Client:
```bash
npx prisma generate
```

3. (Optional) Seed the database:
```bash
npx prisma db seed
```

### 5. Verify Installation
1. You can explore your database using Prisma Studio:
```bash
npx prisma studio
```

## Common Troubleshooting

- If you have connection issues with PostgreSQL, verify that:
  - PostgreSQL is running on your system
  - The credentials in DATABASE_URL are correct
  - Port 5432 is available

- If migrations fail:
  - Verify that the database is empty for the first migration
  - Ensure there are no conflicts with previous migrations

## Additional Resources
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
