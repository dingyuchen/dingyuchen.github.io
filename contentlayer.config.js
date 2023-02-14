import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkBreaks from 'remark-breaks';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  }
};

export const Zettel = defineDocumentType(() => ({
  name: 'Zettel',
  filePathPattern: `notes/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    desc: {
      type: 'string',
      required: true
    },
    created: {
      type: 'number',
      required: true,
    },
    updated: {
      type: 'number',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: '.',
  documentTypes: [Zettel],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      rehypeKatex
    ],
  },
});