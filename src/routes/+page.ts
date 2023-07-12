import type { Post } from "$lib/types.js"
import * as devalue from "devalue"

export async function load({ fetch }) {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json().then(devalue.parse)
    return { posts }
}