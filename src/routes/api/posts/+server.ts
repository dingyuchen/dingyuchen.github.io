import { postValidator, type Metadata } from "$lib/types"
import { json } from "@sveltejs/kit"

async function getPosts() {
    const paths = import.meta.glob(['/src/posts/*.md', '/src/posts/*/*.md']) // add more nesting as necessary

    let posts = []
    for (const path in paths) {
        const file = await paths[path]()

        if (!(file && typeof file === "object" && 'metadata' in file)) {
            throw new Error("file type is incorrect");
        }
        const slug = path.replace("/src/posts/", "").replace(".md", "")
        const metadata = file.metadata as Metadata
        const post = postValidator.parse({
            ...metadata,
            edited: new Date(metadata.edited),
            date: new Date(metadata.date),
            slug
        })
        if (post.publish) {
            posts.push(post)
        }
    }
    posts.sort((first, second) => first.date.getTime() - second.date.getTime())
    return posts
}

import * as devalue from "devalue"
export async function GET() {
    const posts = await getPosts()
    return json(devalue.stringify(posts)) // devalue to send date objects
}