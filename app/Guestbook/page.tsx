"use client"

import React, { useEffect, useState } from "react"
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"

import { db } from "@/config/firebase"

import Form from "./Form"
import Guestcard from "./Guestcard"

// Assuming you have your Firebase configuration set up in this file.

export default function GuestbookPage() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function fetchMessages() {
      try {
        const messagesCollectionRef = collection(db, "guestbook")

        const q = query(
          messagesCollectionRef,
          orderBy("date", "asc"), // "asc" for ascending order, or "desc" for descending order
          limit(25)
        )

        const data = await getDocs(q)

        const messagesData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))

        setMessages(messagesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchMessages()
  }, [])

  return (
    <>
      <h1>Sign your name here!</h1>
      <Form />
      <ul>
        {messages.map((message) => (
          <li key={message}>
            <Guestcard message={message} />
          </li>
        ))}
      </ul>
    </>
  )
}
