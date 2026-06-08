// astro.config.mjs
export default defineConfig({
  site: 'https://FrancoOkinggton1.github.io',
  base: '/Catalogo-El-Mayor/', // Asegúrate de que termine en barra
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  } 
}); 