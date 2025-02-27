import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   server: {
      port: 5173,
      proxy: {
         '/api': {
            target: 'http://localhost:3003',
            changeOrigin: true,
         },
      },
   },
   resolve: {
      alias: {
         '@': '/src',
         '@components': '/src/components',
         '@pages': '/src/pages',
         '@context': '/src/context',
         '@hooks': '/src/hooks',
         '@services': '/src/services',
      },
   },
});
