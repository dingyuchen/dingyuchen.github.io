// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';
import rehypeExpressiveCode from 'rehype-expressive-code';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap"
import { rehypeExpressiveCodeOptions } from './ec.config.mjs';

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
    expressiveCode(),
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