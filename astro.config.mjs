// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import org from 'astro-org';
import { rehypeShiki } from '@astrojs/markdown-remark';
import rehypeKatex from 'rehype-katex';

const shikiConfig = {
  themes: {
    light: 'catppuccin-latte',
    dark: 'catppuccin-macchiato',
  },
  defaultColor: 'light',
  wrap: true,
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://dingyuchen.github.io',
  integrations: [org({
    rehypePlugins: [[rehypeShiki, shikiConfig], rehypeKatex]
  })]
});
