"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import RedirectItem from "@/components/sections/redirectitem";

interface ApiResponse {
  ipAddress: string;
}

export default function Page() {
  const buttonStyle = {
    width: "40px",
    height: "40px",
  };

  const iconStyle = {
    marginTop: "8px",
    width: "32px",
    height: "32px",
  };

  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {
    // Fetch the user's IP address from the API route
    fetch("/api/ip")
      .then((response) => response.json() as Promise<ApiResponse>)
      .then((data) => {
        setIpAddress(data.ipAddress);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col items-center gap-3">
        <Image
          className="rounded-full"
          src="https://media.discordapp.net/attachments/760653808505847831/1153961993896734763/image.png?width=1370&height=1227"
          alt=""
          width={160}
          height={160}
        />
        <h1 className="font-extrabold text-4xl">Brian Mai</h1>
        <section className=" text-[0.95rem] lg:text-[1.05rem] leading-6 mx-auto px-7">
          <p className="text-xl max-w-lg text-center justify-center pt-0">
            Welcome to my corner of the internet! I am a computer science
            student at California Polytechnic State University, San
            Luis Obispo. <br></br>Get in touch with me below!
            <a href="https://cabrera-site.vercel.app/">inspo</a>
            <a href="https://leerob.io/guestbook">guestbook inspo</a>
          </p>
        </section>
        <h1>Last visit was from: {ipAddress}</h1> {/* Display the IP address */}
        <div className="flex gap-3 items-center">
          <RedirectItem
            href="https://github.com/reakunen"
            icon={<GitHubLogoIcon className="h-5 w-5 dark:text-white" />}
            title={"GitHub"}
          />
          <RedirectItem
            href="mailto:brianm17055@gmail.com"
            icon={<MailIcon className="h-5 w-5 dark:text-white" />}
            title={"Email"}
          />
          <RedirectItem
            href="https://www.linkedin.com/in/brianemai/"
            icon={<LinkedinIcon className="h-5 w-5 dark:text-white" />}
            title={"LinkedIn"}
          />
        </div>
      </div>
    </div>
  );
}
