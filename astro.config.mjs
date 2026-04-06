// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import rehypeExpressiveCode from 'rehype-expressive-code';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap"
import { rehypeExpressiveCodeOptions } from './src/utils/entrypoints';

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

  integrations: [
    mdx({
      syntaxHighlight: false,
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions], rehypeKatex],
    }),
    sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});