# Miller Design - Project Guide

## Project Overview
Next.js 15 portfolio website for **Miller Design**, a Dubai-based graphic design agency with 15+ years of experience. Specializes in branding, web design, and creative visual solutions.

**Domain**: https://millerdesign.ai
**Founder**: Geoff Miller

## Branding

### Color Palette
- **Primary**: `#04b9d6` (Turquoise blue) - Main brand color
- **Secondary**: `#171717` (Dark/Black) - Text and contrast
- **Gradient Variations**:
  - `#1aceea` (Light cyan)
  - `#04b9d6` (Primary turquoise)
  - `#13cbc2` (Teal)
  - `#0284c7` (Sky blue)

### Typography

#### 1. **Druk Wide Medium** (Display Font)
- **Type**: Local font (TTF)
- **Location**: `/public/fonts/Druk-Wide-Medium.ttf`
- **Usage**: Headings, titles, bold statements
- **Implementation**:
  ```tsx
  import localFont from 'next/font/local';
  const drukWide = localFont({
    src: '../../public/fonts/Druk-Wide-Medium.ttf',
    display: 'swap',
  });
  ```

#### 2. **Inter** (Body Font)
- **Type**: Google Font
- **Usage**: Body text, paragraphs, general content
- **CSS Variable**: `--font-inter`
- **Implementation**:
  ```tsx
  import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  });
  ```
- **Tailwind Config**: `font-sans` → `var(--font-inter)`

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (implied)

## Key Features
- SEO optimized with structured data
- Google Analytics integration (G-VK02GGPTG6)
- CDN for images (BunnyCDN)
- Responsive design
- Interactive animations and transitions
