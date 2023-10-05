import React from "react"
import Link from "next/link"

import { getSortedPostsData } from "@/lib/posts"
import Date from "@/components/date"

type AllPostsData = {
  date: string
  title: string
  id: string
  author: string
}[]

export default function BlogPage() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold">Blog Posts 🤓</h1>
      <section className="mt-6">
        <ul>
          {allPostsData.map(({ id, date, title, author }) => (
            <li key={id}>
              <div className="font-medium mb-1 mt-5 dark:text-blue-400 text-blue-600 hover:underline">
                <Link href={`/Blog/${id}`}>{title}</Link>
              </div>
              <div className="flex gap-3">
                <div>
                  <Date dateString={date} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
