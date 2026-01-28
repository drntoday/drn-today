import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drn.today',
  base: '/',
  integrations: [],
  output: 'static',
  build: {
    format: 'directory'
  }
});
