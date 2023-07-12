import type { Metadata } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
    try {
        const post = await import(`../../../posts/${params.slug}.md`)
        return {
            content: post.default,
            metadata: post.metadata as Metadata
        }
    } catch (e) {
        throw error(404, `Cannot find ${params.slug}`)
    }
}