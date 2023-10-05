"use client"

import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

import "@/styles/spotify.css"
import PlayingAnimation from "./PlayingAnimation"
import { getNowPlayingItem, getTopTracks } from "./SpotifyAPI"
import { SpotifyLogo } from "./SpotifyLogo"

export default function SpotifyPlayer() {
  const [nowPlayingItem, setNowPlayingItem] = useState<{
    albumImageUrl: string
    artist: string
    isPlaying: boolean
    songUrl: string
    title: string
  } | null>(null)

  const fetchData = () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || ""
    const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET || ""
    const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN || ""
    getNowPlayingItem(clientId, clientSecret, refreshToken)
      .then((result) => {
        setNowPlayingItem(result || null)
      })
      .catch((error) => {
        console.error(error)
        setNowPlayingItem(null)
      })
  }

  useEffect(() => {
    fetchData()

    const intervalId = setInterval(fetchData, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const playerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      className="flex flex-col w-240 shrink-0"
      initial="hidden"
      animate="visible"
      variants={playerVariants}
    >
      {nowPlayingItem ? (
        <div className="flex gap-2 mb-1">
          <motion.div variants={playerVariants} className="spotify-logo mb-1">
            <SpotifyLogo />
          </motion.div>
          <motion.div variants={playerVariants} className="text-xs flex gap-2">
            <span className="font-medium">Now Playing</span>
            <PlayingAnimation />
          </motion.div>
        </div>
      ) : null}
      {nowPlayingItem ? (
        <motion.div
          className="container outline outline-gray-300 dark:outline-gray-500 rounded-sm  flex items-center p-2 gap-2 "
          variants={playerVariants}
        >
          <img
            className="h-10 w-10 rounded-sm"
            src={nowPlayingItem.albumImageUrl}
            alt="Album Cover"
          />
          <div className="text-xs">
            <a className="font-medium" href={nowPlayingItem.songUrl}>
              <h1 className="font-medium hover:underline">
                {nowPlayingItem.title.length > 20
                  ? nowPlayingItem.title.slice(0, 20) + "..."
                  : nowPlayingItem.title}
              </h1>
            </a>
            <p className="text-gray-500">
              {nowPlayingItem.artist.length > 20
                ? nowPlayingItem.artist.slice(0, 20) + "..."
                : nowPlayingItem.artist}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className='mb-8'>
          <motion.div variants={playerVariants}>
            <SpotifyLogo width="30px" height="30px" />
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
