# SileoTube - Focus Guard

A Next.js landing page for the SileoTube browser extension, designed to help users reclaim their attention from algorithmic distractions.

## Features

- Built with Next.js 15 (App Router)
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture with modular file structure
- Google Tag Manager integration
- Google Analytics integration
- Google Ads integration
- Microsoft Clarity integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

3. Add your analytics IDs to `.env.local`:
```env
# Google Tag Manager (recommended - can manage other tags)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics (only if not using GTM)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Ads (only if not using GTM)
NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=your-clarity-id
```

**Note:** If you use Google Tag Manager, you can configure Google Analytics and Google Ads through GTM instead of using the direct environment variables. The code will automatically use GTM if `NEXT_PUBLIC_GTM_ID` is provided.

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with analytics
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── analytics/      # Analytics tracking component
│   ├── navbar/         # Navigation components
│   ├── hero/           # Hero section components
│   ├── showcase/       # Feature showcase
│   ├── features/       # Feature cards
│   ├── customization/  # Customization section
│   ├── science/        # Science section
│   ├── testimonials/   # Testimonials
│   ├── footer/         # Footer components
│   ├── cta-section/    # Call-to-action section
│   └── download-modal/ # Download modal
├── constants.ts        # App constants
└── types.ts           # TypeScript types
```

## Analytics Setup

The project includes integrations for:

- **Google Tag Manager**: Tag management system (recommended). If GTM is configured, it will be used to manage other Google tags. You can configure Google Analytics and Google Ads through GTM's interface.
- **Google Analytics**: Track page views and user interactions (direct integration, only used if GTM is not configured)
- **Google Ads**: Track conversions and ad performance (direct integration, only used if GTM is not configured)
- **Microsoft Clarity**: Record user sessions and heatmaps

All analytics are configured via environment variables and will only load if the respective IDs are provided.

**Important:** If you provide `NEXT_PUBLIC_GTM_ID`, the direct Google Analytics and Google Ads scripts will be skipped, and you should configure those tags through Google Tag Manager instead.

## License

Private project - All rights reserved
