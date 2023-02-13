import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Zettel, allZettels } from 'contentlayer/generated'
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticProps } from 'next'

import Counter from "../../components/Counter"

export const getStaticPaths = () => {
    const paths = allZettels.map((post) => `/notes/${post.slug}`)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    const post = allZettels.find((post) => post._raw.flattenedPath === params?.slug)
    return {
        props: {
            post,
        },
    }
}

const PostLayout = ({ post }: { post: Zettel }) => {
    const Page = useMDXComponent(post.body.code)
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="prose mx-auto max-w-2xl py-16">
                <div className="mb-6 text-center">
                    <Link className="text-center text-sm font-bold uppercase text-blue-700" href="/">
                        Home
                    </Link>
                </div>
                <div className="mb-6 text-center">
                    <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
                    <time dateTime={post.publishedAt} className="text-sm text-slate-600">
                        {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
                    </time>
                </div>

                {/* <Page components={{ Counter }} /> */}
                <Page />
            </article>
        </>
    )
}

export default PostLayout