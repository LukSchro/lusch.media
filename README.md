# lusch.media

Portfolio website for Lukas Schroeder - Photography & Videography

## About

This is a modern, responsive portfolio website showcasing the photography and videography work of Lukas Schroeder. Built with Next.js and Tailwind CSS, it features a clean design with easy navigation between different categories of work.

## Features

- **Landing Page**: Hero section with featured work categories
- **Photography Section**: Three categories (Landscape, Sports, Moments) with dedicated gallery pages
- **Videography Page**: Showcase of video projects with durations
- **About Page**: Bio, services, and contact information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Static Export**: Can be deployed to any static hosting service

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **React 19**: Latest React features

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lusch.media/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── photography/         # Photography section
│   │   ├── landscape/       # Landscape gallery
│   │   ├── sports/          # Sports gallery
│   │   └── moments/         # Moments gallery
│   ├── videography/         # Videography page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   └── Navigation.tsx       # Navigation bar
└── public/                  # Static assets (to be added)
```

## Pages

1. **Home** (`/`) - Landing page with hero section and featured work
2. **Photography** (`/photography`) - Overview of photography categories
3. **Landscape** (`/photography/landscape`) - Landscape photography gallery
4. **Sports** (`/photography/sports`) - Sports photography gallery
5. **Moments** (`/photography/moments`) - Candid moments gallery
6. **Videography** (`/videography`) - Video portfolio showcase
7. **About** (`/about`) - About Lukas Schroeder with contact information

## Customization

### Adding Real Images

Replace the placeholder gradients in the gallery pages with real images:

1. Add images to the `public/` directory
2. Update the gallery items in each page component
3. Use Next.js `Image` component for optimized loading

### Adding Videos

For the videography page, integrate a video player:

1. Host videos on a platform (YouTube, Vimeo, or self-hosted)
2. Update the video items with actual embed codes or video URLs
3. Consider using libraries like `react-player` for video playback

## Deployment

This project is configured for static export and can be deployed to:

- **Vercel**: Automatic deployments via Git
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Deploy the `out/` folder
- **Any Static Host**: Upload the contents of `out/` after running `npm run build`

## License

All rights reserved © 2026 Lukas Schroeder

## Contact

For inquiries, reach out at: contact@lusch.media
