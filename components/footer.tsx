import Link from "next/link"
import {
  BookOpenCheckIcon,
  ClipboardList,
  ContactIcon,
  FolderOpenIcon,
  HomeIcon,
  LinkedinIcon,
  PencilIcon,
  UserIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import NavItem from "./sections/navitem"
import RedirectItem from "./sections/redirectitem"

export function Footer() {
  return (
    <footer className="fixed bottom-6 left-1/2 z-[1] box-content flex h-[36px] max-w-[calc(100%-64px)] -translate-x-1/2 items-end gap-3 rounded-2xl border border-[#00000012] bg-white/70 p-[10px] pb-[6px] will-change-contents [transform-origin:center_bottom] [backdrop-filter:blur(100px)_saturate(400%)_brightness(100%)] [box-shadow:0_30px_60px_rgba(0,0,0,0.12)] dark:border-[#ffffff14] dark:bg-[#161616cc] dark:[box-shadow:0_0_02px#ffffff07]">
      <NavItem
        href="/"
        icon={<HomeIcon className="h-5 w-5 text-gray-400" />}
        title={"Home"}
      />
      <NavItem
        href="/About  "
        icon={<UserIcon className="h-5 w-5 text-gray-400" />}
        title={"About"}
      />
      <NavItem
        href="/Guestbook"
        icon={<BookOpenCheckIcon className="h-5 w-5 text-gray-400" />}
        title={"Guestbook"}
      />
      <NavItem
        href="/Blog"
        icon={<PencilIcon className="h-5 w-5 text-gray-400" />}
        title={"Blog"}
      />

      {/* <RedirectItem
        href="https://www.linkedin.com/in/brianemai/"
        target="_blank"
        icon={<LinkedinIcon className="h-5 w-5 text-gray-400" />}
        title={"LinkedIn"}
      /> */}
      <RedirectItem
        href="https://github.com/reakunen"
        // icon={<FolderArchiveIcon className="h-5 w-5 text-gray-400" />}
        icon={<FolderOpenIcon className="h-5 w-5 text-gray-400" />}
        title={"Projects"}
      />
      <RedirectItem
        href="/resume.pdf"
        icon={<ClipboardList className="h-5 w-5 text-gray-400" />}
        title={"Resume"}
      />
      {/* <NavItem
        href="/Contact"
        icon={<ContactIcon className="h-5 w-5 text-gray-400" />}
        title={"Contact"}
      /> */}
    </footer>
  )
}
