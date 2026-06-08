import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cambia "tu-usuario" por tu nombre de usuario en GitHub
  site: 'https://FrancoOkinggton1.github.io',
  // Cambia "elmayor" por el nombre exacto de tu repositorio
  base: 'elmayor',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});