# Personal "Linktree" with Notion Integration

This project is a personal "Linktree" style website built with Next.js, and Notion API integration. It features a visually appealing animated text, and dynamic links fetched from a Notion database.

## Features

- Dynamic links fetched from a Notion database
- Responsive design

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Notion API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NOTION_TOKEN=your_notion_api_token
   NOTION_DATABASE_ID=your_notion_database_id
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/page.tsx`: Main page component
- `src/components/custom/`: Custom components including Notion integration
- `src/lib/utils.ts`: Utility functions

## Notion Integration

This project uses the Notion API to fetch links dynamically. The links are displayed as 3D cards with hover effects.
