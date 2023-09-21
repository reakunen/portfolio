import Link from "next/link"

import Tooltip from "./tooltip-provider"

interface NavItemProps {
  href: string
  title: string
  icon: JSX.Element
}

export default function NavItem({ href, title, icon }: NavItemProps) {
  return (
    <Tooltip title={title}>
      <div>
        <Link
          href={href}
          prefetch
          scroll={true}
          className={
            " flex h-10 w-10 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] text-center text-black shadow-lg outline-none focus:outline-none dark:bg-opacity-50 dark:text-primary-275"
          }
        >
          <div className="p-3 hover:animate-bounce">{icon}</div>
        </Link>
      </div>
    </Tooltip>
  )
}
