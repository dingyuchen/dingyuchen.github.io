import { z } from "zod"

export type Metadata = {
    title: string
    date: string
    edited: string
    publish: boolean
    tags: string[]
}

export const postValidator = z.object(
    {
        title: z.string(),
        slug: z.string(),
        date: z.date(),
        edited: z.date(),
        publish: z.boolean(),
        tags: z.array(z.string())
    }
)

export type Post = z.infer<typeof postValidator>
