// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { rehypeShiki } from '@astrojs/markdown-remark';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import mdx from '@astrojs/mdx';

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
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeShiki, shikiConfig], rehypeKatex]
  })]
});