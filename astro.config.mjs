// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages deployment configuration
// Deploying to: https://rpretzer.github.io/infocus-demo
const site = process.env.PUBLIC_SITE_URL || 'https://rpretzer.github.io';
const base = process.env.PUBLIC_BASE_PATH || '/infocus-demo';

// https://astro.build/config
export default defineConfig({
  site: site,
  base: base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});