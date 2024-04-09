// @ts-nocheck
import Head from "next/head"
import Link from "next/link"

import { getAllPostIds, getPostData } from "@/lib/posts"
import Date from "@/components/date"
import utilStyles from "@/styles/utils.module.css"

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
  id: any
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
    <>
      <div className="flex justify-center">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <div className="flex flex-col">
          {/* Post Title */}

          <article className="w-full max-w-lg pb-10 lg:px-0 px-8">
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={" text-sm flex justify-start items-center gap-x-2"}>
              <Date dateString={postData.date} />• {postData.author}
            </div>
            <hr className="py-2 opacity-0" />
            <div
              className={"prose prose-sm w-full text-left dark:prose-invert"}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

          <div className="pb-20 -mt-4 font-medium dark:text-blue-400 text-blue-600 hover:underline">
            <Link href="/Blog">← Back to Blogs</Link>
          </div>
        </div>
      </div>
    </>
  )
}
