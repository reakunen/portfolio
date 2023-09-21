import React from "react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Github } from "lucide-react"

import SpotifyPlayer from "./spotify/SpotifyPlayer"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <div className="sticky flex justify-between">
      <SpotifyPlayer />
      <ThemeToggle />
    </div>
  )
}
