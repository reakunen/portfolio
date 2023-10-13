"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import utilStyles from "@/styles/utils.module.css"

export default function Page() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold">About Me 🤔</h1>
      <main className={utilStyles.headingMd}>
        <h1 className="invisible text-1xl font-bold flex flex-col w-full lg:mb-8 text-center lg:-mt-2 pt-0">
          About Me
        </h1>
        <img
          src="https://media.discordapp.net/attachments/902700750419947602/1162497763657916487/IMG_5360.jpg?ex=653c2769&is=6529b269&hm=5592364d3dcca799ec2d5e6991d9cbaca3289f1b58f69159204d84907944a709&=&width=919&height=1225"
          alt="Brian Mai"
          height="275"
          width="275"
          className="text-center mx-auto transform rounded-lg lg:hidden mb-4 lg:mb-0 text-loose"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-6xl md:max-w-2xl items-start max-w-lg pb-24">
          <div className="prose prose-p:text-[16px] prose-ul:text-[15px] w-full text-left dark:prose-invert">
            <p className="leading-loose">
              My name is <span className="font-bold">Brian</span>! I am looking
              for Software Engineering Intern positions so please don't
              hesistate to reach out to me or connect just for a chat! I am
              passionate about computer science, and am planning to concentrate
              in Machine Learning and AI here at Cal Poly SLO. On my free time I
              love to develop web applications using{" "}
              <a href="https://nextjs.org/" className="underline">
                NextJS 13
              </a>
              !
            </p>
            <section className="mt-10">
              <p className="flex text-lg font-bold mb-2">Fun Facts:</p>
              <ul className="ml-6 list-disc list-inside g">
                <li>I have been playing the piano for over 10 years now!</li>
                <li>
                  My favorite piece to play is Arabesque No.1 by Claude Debussy
                </li>
                <li>I am Town-Hall 14 in Clash of Clans</li>
                <li>Favorite artists: Laufey, Beabadoobee, Yoasobi, Aminé</li>
                <li>
                  I love cooking Spam Musubi, check out my{" "}
                  <Link href="/Blog" className="underline">
                    food blog posts!
                  </Link>
                </li>
                <li>I like to hit chest and bench press at the gym</li>
                <li>I'm currently watching Jujutsu Kaisen Season 2</li>
              </ul>
            </section>
          </div>
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <img
              src="https://media.discordapp.net/attachments/902700750419947602/1162497763657916487/IMG_5360.jpg?ex=653c2769&is=6529b269&hm=5592364d3dcca799ec2d5e6991d9cbaca3289f1b58f69159204d84907944a709&=&width=919&height=1225"
              alt="Brian Mai"
              height="400"
              width="400"
              className="text-center mx-auto transform rounded-lg hidden lg:block"
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}
