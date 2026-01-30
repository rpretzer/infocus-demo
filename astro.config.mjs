// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages deployment configuration
// Update these values based on your repository:
// - If deploying to username.github.io/repo-name, uncomment base and set to '/repo-name'
// - If deploying to custom domain or username.github.io, leave base commented out
const site = process.env.PUBLIC_SITE_URL || 'https://username.github.io';
const base = process.env.PUBLIC_BASE_PATH || undefined; // e.g., '/infocus-withJodi'

// https://astro.build/config
export default defineConfig({
  site: site,
  base: base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});