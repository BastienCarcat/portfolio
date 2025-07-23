# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project features an animated bento grid layout with scroll-triggered animations using Framer Motion.

## Development Commands

- **Start dev server**: `pnpm dev` (uses Turbopack)
- **Build**: `pnpm run build`
- **Start production**: `pnpm start`
- **Lint**: `pnpm run lint`

ALWAYS use 'pnpm'

## Architecture

### File Structure

- `src/app/(home)/` - Route group containing the main portfolio page
- `src/app/(home)/_components/` - Page-specific components (header, title, description, picture, projects, socials, contact cards)
- `src/components/ui/` - Reusable UI components
- `src/lib/` - Utility functions

### Key Components

**BentoGrid System**: The core UI pattern using a 12-column CSS Grid layout

- `BentoGrid`: Container component with `grid-cols-12` layout
- `BentoCard`: Individual cards with consistent styling and shadows
- Cards use `col-span-*` and `row-span-*` classes for responsive positioning

**Motion System**: Scroll-triggered animations using Framer Motion

- `MotionGrid` component handles scroll detection and state management
- Cards animate from initial centered photo to grid layout at 20% scroll progress
- Uses `layoutId="picture"` for shared layout animations between states
- Motion variants: `scrollUp` (hidden state) and `scrollDown` (visible state)
- The page behaviour is to show a single picture at render and then at scroll, reveal others bento cards (grid layout). The picture is sliding to his bento place (using motion)

### Styling Patterns

- Tailwind CSS with custom utility classes
- Responsive design: `lg:` breakpoints for desktop, mobile-first approach
- Dark mode support in BentoCard component

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- React 19 and Next.js 15 types configured

## Component Development Patterns

When creating new card components:

1. Extend `React.ComponentPropsWithRef<typeof BentoCard>`
2. Use BentoCard as the wrapper with appropriate grid classes
3. Pass through ref prop for motion animations
4. Follow the naming pattern: `*-card.tsx` in `_components/`

Motion-enabled components should:

- Be wrapped with `motion()` function
- Include `animate`, `initial`, and `variants` props
- Use consistent animation variants from the main MotionGrid component

## Best Practices

- **Code Comments**:
  - Write comments in code only if necessary
