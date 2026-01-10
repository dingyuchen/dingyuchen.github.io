// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import org from 'astro-org';
import { rehypeShiki } from '@astrojs/markdown-remark';
import rehypeKatex from 'rehype-katex';

const shikiConfig = {
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
  defaultColor: 'light',
  wrap: true,
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [org({
    rehypePlugins: [[rehypeShiki, shikiConfig], rehypeKatex]
  })]
});
