"use client"

import React from "react"
import { Orbit } from "@uiball/loaders"
import { useTheme } from "next-themes"

export default function Loader() {
  const { theme } = useTheme()
  return (
    <div className="mt-32">
      {theme === "light" ? (
        <Orbit size={40} color="#231F20" />
      ) : (
        <Orbit size={40} color="#fff"/>
      )}
    </div>
  )
}
