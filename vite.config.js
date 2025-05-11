import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ para producción en Vercel
  build: {
    outDir: 'dist', // ✅ Vercel espera que el build esté aquí
  },
});
