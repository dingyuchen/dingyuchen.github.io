import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        createdAt: { type: 'date', required: true },
        updatedAt: { type: 'date', required: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/content/${post._raw.flattenedPath}` },
    },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] })