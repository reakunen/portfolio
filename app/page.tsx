import React from "react"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <img
          className="rounded-full h-28 w-28"
          src="https://media.discordapp.net/attachments/760653808505847831/1153961993896734763/image.png?width=1370&height=1227"
          alt=""
        />
        <h1>Brian Mai</h1>
        <h1>Hey I'm Brian I am a computer science student at Cal Poly SLO </h1>
        <h1>Let's get in touch!</h1>
        <div className="flex gap-3 child:pointer">
          <GithubIcon />
          <LinkedinIcon />
          <MailIcon />
        </div>
        <Button>Contact</Button>
      </div>
    </div>
  )
}
