// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

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

export const shikiThemes = shikiConfig.themes;

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],

  site: 'https://dingyuchen.github.io',

  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeShiki, shikiConfig], rehypeKatex]
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});