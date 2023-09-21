import React from "react"
import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Page() {
  const buttonStyle = {
    width: "40px", // Adjust the width as needed
    height: "40px", // Adjust the height as needed
  }

  const iconStyle = {
    marginTop: "8px",
    width: "32px", // Adjust the width for the icons
    height: "32px", // Adjust the height for the icons
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="rounded-full"
          src="https://media.discordapp.net/attachments/760653808505847831/1153961993896734763/image.png?width=1370&height=1227"
          alt=""
          width={140}
          height={140}
        />
        <h1 className="font-bold text-3xl">Brian Mai</h1>
        <h1 className='mt-5'>
          Hey, I&apos;m Brian. I am a computer science student at Cal Poly SLO.
        </h1>
        <h1>Let&apos;s get in touch!</h1>
        <div className="flex gap-3 items-center">
          <a
            href="https://github.com/reakunen"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" style={buttonStyle}>
              <div style={iconStyle}>
                <GithubIcon />
              </div>
            </Button>
          </a>
          <a href="mailto:brianm17055@gmail.com">
            <Button variant="outline" style={buttonStyle}>
              <div style={iconStyle}>
                <MailIcon />
              </div>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/brianemai/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" style={buttonStyle}>
              <div style={iconStyle}>
                <LinkedinIcon />
              </div>
            </Button>
          </a>
        </div>
        <Button>Contact</Button>
      </div>
    </div>
  )
}
