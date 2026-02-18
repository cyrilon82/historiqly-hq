import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://historiqly.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
