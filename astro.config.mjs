import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // URL base de tu perfil de GitHub
  site: 'https://FrancoOkinggton1.github.io',
  // Debe ser el nombre exacto de tu repositorio con sus mayúsculas
  base: '/Catalogo-El-Mayor', 
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
}); 