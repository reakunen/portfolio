"use client"

import React, { useEffect, useState } from "react"

import PlayingAnimation from "./PlayingAnimation"
import { getNowPlayingItem, getTopTracks } from "./SpotifyAPI"
import { SpotifyLogo } from "./SpotifyLogo"

export default function SpotifyPlayer() {
  const [nowPlayingItem, setNowPlayingItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const fetchData = () => {
    getNowPlayingItem(
      process.env.NEXT_PUBLIC_CLIENT_ID,
      process.env.NEXT_PUBLIC_CLIENT_SECRET,
      process.env.NEXT_PUBLIC_REFRESH_TOKEN
    )
      .then((result) => {
        setNowPlayingItem(result)
      })
      .catch((error) => {
        // Handle errors here
        console.error(error)
        setLoading(false) // Set loading to false on error as well
      })
  }

  useEffect(() => {
    // Fetch data initially
    fetchData()

    setLoading(false) // Set loading to true when fetching data

    // Set up an interval to fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 2000)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      {loading ? (
        // Render a loading indicator while fetching data
        <div className="text-xs">Loading...</div>
      ) : nowPlayingItem ? (
        <div className="flex flex-col">
          <div className="flex gap-2 mb-1">
            <SpotifyLogo />
            <div className="text-xs flex gap-2">
              Now Playing <PlayingAnimation />
            </div>
          </div>
          <div className="container outline outline-gray-300 dark:outline-gray-500 rounded-sm  flex items-center p-2 gap-2 ">
            <img
              className="h-10 w-10 rounded-sm"
              src={nowPlayingItem.albumImageUrl}
              alt="Album Cover"
            />
            <div className="text-xs">
              <a className="font-medium" href={nowPlayingItem.songUrl}>
                <h1 className="font-medium hover:underline">
                  {nowPlayingItem.title.length > 20 // Adjust the length threshold as needed
                    ? nowPlayingItem.title.slice(0, 20) + "..." // Truncate long titles
                    : nowPlayingItem.title}{" "}
                </h1>
              </a>
              <p className="text-gray-500">
                {" "}
                {nowPlayingItem.artist.length > 20 // Adjust the length threshold as needed
                  ? nowPlayingItem.artist.slice(0, 20) + "..." // Truncate long titles
                  : nowPlayingItem.artist}{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Render the SpotifyLogo component when there is no data
        <SpotifyLogo />
      )}
    </>
  )
}
