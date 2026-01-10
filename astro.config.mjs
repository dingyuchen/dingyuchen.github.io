// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import org from 'astro-org';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [org({
    rehypePlugins: [rehypeHighlight, rehypeKatex]
  })]
});