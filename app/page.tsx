"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import RedirectItem from "@/components/sections/redirectitem"

interface ApiResponse {
  ipAddress: string
  location: string
}
interface LocationResponse {
  countryCode: string
  // Add other properties here if needed, e.g., city
}
export default function Page() {
  return (
    <>
      {" "}
      <ParticleBackground />
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="rounded-full"
            src="https://media.discordapp.net/attachments/760653808505847831/1153961993896734763/image.png?width=1370&height=1227"
            alt=""
            width={170}
            height={170}
          />
          <h1 className="relative w-[max-content]  font-mono font-bold text-4xl before:absolute before:inset-0 before:animate-typewriter dark:before:bg-black before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black dark:after:bg-white">
            Brian Mai.
          </h1>
          {/* <h1 className="font-extrabold  text-4xl">Brian Mai</h1> */}
          <section className=" text-[0.95rem] lg:text-[1.05rem] leading-6 mx-auto px-7">
            <p className="text-xl max-w-lg text-center justify-center pt-0 ">
              Welcome to my corner of the internet! I am a computer science
              student at Cal Poly, SLO. I am a full stack developer, with a goal
              to create high quality software and apps.
            </p>
            <p className="text-xl flex justify-center mt-2">
              Get in touch with me below!
            </p>
          </section>
          {/* Display the user's location */}
          <div className="flex gap-4 items-center">
            <RedirectItem
              href="https://github.com/reakunen"
              icon={<GitHubLogoIcon className="h-6 w-6 dark:text-white" />}
              title={"GitHub"}
            />
            <RedirectItem
              href="mailto:brianm17055@gmail.com"
              icon={<MailIcon className="h-6 w-6 dark:text-white" />}
              title={"Email"}
            />
            <RedirectItem
              href="https://www.linkedin.com/in/brianemai/"
              icon={<LinkedinIcon className="h-6 w-6   dark:text-white" />}
              title={"LinkedIn"}
            />
          </div>
        </div>
      </div>
    </>
  )
}
