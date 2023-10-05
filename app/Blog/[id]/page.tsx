import Link from "next/link"

import { getAllPostIds, getPostData } from "@/lib/posts"
import Date from "@/components/date"
import Head from "next/head"
type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
  author: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex flex-col">
        {/* Post Title */}
        <h1 className="font-extrabold text-3xl mb-1 flex justify-center">
          {postData.title}
        </h1>

        <div className="flex justify-center text-gray-700 dark:text-slate-300 font-medium mb-5 gap-2">
          <div className="author">By {postData.author}</div>
          <div className="dot">•</div>
          <Date dateString={postData.date} />
        </div>

        {/* Post Content */}
        <div
          className="text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className="">
          <Link href="/Blog">← Back to blog</Link>
        </div>
      </div>
    </div>
  )
}
