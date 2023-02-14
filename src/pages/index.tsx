import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

import { compareDesc, format } from 'date-fns'
import { allZettels, Zettel } from 'contentlayer/generated'


const PostCard = (post: Zettel) => {
  const created = new Date(post.created)
  console.log(post._raw.flattenedPath)
  return (
    <div className="mb-6">
      <time dateTime={created.toDateString()} className="block text-sm text-slate-600">
        {format(created, 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={`${post.slug}`}>
          <p className="text-blue-700 hover:text-blue-900">{post.title}</p>
          <p className="prose">{post.desc}</p>
        </Link>
      </h2>
    </div>
  )
}

const Home = ({ posts }: { posts: Zettel[] }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Ding YuChen</title>
      </Head>

      <h1 className="mb-8 text-3xl">My Digital Garden</h1>

      {posts.map((post: Zettel) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  )
}

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = allZettels.sort((a: Zettel, b) => {
    return compareDesc(new Date(a.created), new Date(b.created))
  })
  return { props: { posts } }
}

export default Home;
