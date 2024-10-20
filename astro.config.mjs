import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  server: {
      port: 4321,
      host: '127.0.0.1'
  },

  integrations: [tailwind()],
});