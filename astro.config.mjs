// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages URL — update site to 'https://esparkman.com' and remove base when custom domain is live
  site: 'https://pagediscbet.github.io',
  base: '/esparkman-magazine',
  vite: {
    plugins: [tailwindcss()]
  }
});
