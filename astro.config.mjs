import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  base: '/memorium',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: [
        'kiernan.studio',
        '.kiernan.studio',
        '.traefik.me'
      ]
    }
  },
  integrations: [tailwind()],
});