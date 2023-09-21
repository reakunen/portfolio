import { ReactNode } from "react"

import Tooltip from "./tooltip-provider"

export default function RedirectItem({ href, title, icon }) {
  return (
    <Tooltip title={title}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="outline-none focus:outline-none"
        aria-label={title}
      >
        <button
          aria-label={title}
          className="flex h-10 w-10 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] text-center text-black shadow-lg outline-none focus:outline-none dark:bg-opacity-50 dark:text-primary-400"
        >
          <div className="p-3 hover:animate-bounce">{icon}</div>
        </button>
      </a>
    </Tooltip>
  )
}
