# Copilot Instructions for Resume Website

## Project Overview

This is a personal resume website built with Next.js 14, TypeScript, and Tailwind CSS. It's a single-page application that renders Paul Nai's professional resume with a clean, print-friendly design.

## Architecture

- **Single Page App**: All content is in `app/page.tsx` as one large component
- **Static Site**: No API routes, databases, or server-side logic
- **Deployment**: Auto-deploys to Vercel on `main` branch pushes, served at `cv.u-ran.com`

## Development Workflow

```bash
pnpm dev    # Start development server
pnpm build  # Build for production
pnpm lint   # Run ESLint
```

## Code Patterns & Conventions

### Component Structure

- All resume content is inline JSX in the default export function in `app/page.tsx`
- Uses semantic HTML sections: `header`, `section` for each resume block
- No component extraction - everything is co-located for simplicity

### Styling Approach

- **Tailwind-first**: All styling via utility classes, no custom CSS except globals
- **Responsive**: Uses `mx-auto max-w-3xl` container pattern for centered content
- **Print-friendly**: Gray backgrounds and shadows for web, clean for print
- **Skills tags**: Use `bg-gray-200 px-2 py-1 rounded` pattern for skill badges

### Content Organization

Follow the exact section order in `page.tsx`:

1. Header (name, contact)
2. Summary
3. Skills (as tag badges)
4. Experiences (reverse chronological)
5. Education
6. Side Projects

### Code Formatting

- **Prettier**: Configured with single quotes, trailing commas, and plugin order: embed → sql → import-sort → tailwindcss (MUST be last)
- **Import sorting**: Uses `prettier-plugin-import-sort` with module style
- **Tailwind**: Classes auto-sorted by `prettier-plugin-tailwindcss`

### TypeScript

- Strict Next.js TypeScript setup with `next-env.d.ts`
- Uses `Metadata` export in layout for SEO
- No custom types needed - all content is static

## Content Updates

When updating resume content:

- Maintain the established HTML structure and Tailwind classes
- Keep external links with `target="_blank" rel="noopener noreferrer"`
- Use consistent date formats: "MMM YYYY - Present" or "MMM YYYY - MMM YYYY"
- Skills should be added as new `<span>` elements with the standard badge classes

## External Dependencies

- **Minimal**: Only Next.js, React, TypeScript, Tailwind, and dev tools
- **Font**: Uses Inter from Google Fonts (configured in layout)
- **Icons**: References icons8.com in README but not implemented

## Key Files

- `app/page.tsx` - Main resume content
- `app/layout.tsx` - HTML structure and metadata
- `package.json` - Uses pnpm, includes import-sort config
- `.prettierrc.js` - Complex plugin setup, order matters
- `public/CNAME` - Custom domain configuration
