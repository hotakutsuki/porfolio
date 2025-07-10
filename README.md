# Josue Ortiz Portfolio

This is a modern, multi-language portfolio built with [Next.js](https://nextjs.org/).

## Features
- Light & dark mode toggle
- Responsive sidebar navigation
- Experience and projects with accordion (shadcn/ui)
- Localization: English, Spanish, Japanese
- Animated background glow
- Profile photo and downloadable CV
- Tailwind CSS for styling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure
- `src/app/` — Main app directory (pages, layout, components)
- `src/assets/` — Static assets (profile photo, CV)
- `src/components/ui/` — shadcn/ui components (Accordion, etc)

## Customization
- Update your experience, projects, and translations in `src/app/i18n.tsx`.
- Profile photo: `src/assets/profile.png`
- CV: `src/assets/Profile.pdf`

## License
MIT
