"use client"

import { Orbit } from "@uiball/loaders"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"

import { db } from "@/config/firebase"
import Loader from "@/components/loader"

import Form from "./Form"
import Guestcard from "./Guestcard"

// Define an interface for the message data
interface Message {
  id: string
  content: string
  date: Date
  name: string
  photo: string
}

export default function GuestbookPage() {
  const messagesCollectionRef = collection(db, "guestbook")

  // Define the query
  const q = query(messagesCollectionRef, orderBy("date", "desc"), limit(50))

  // Use the useCollection hook to fetch data
  const [messagesSnapshot, loading, error] = useCollection(q)

  // Map the data to the Message interface
  const messages: Message[] =
    messagesSnapshot?.docs.map((doc) => {
      const data = doc.data()
      return {
        id: doc.id,
        content: data.content,
        date: data.date, // Assuming 'date' is a Firestore Timestamp
        name: data.name,
        photo: data.photo,
      }
    }) || []

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-4xl">Guestbook 📖</h1>
      <Form />
      <hr className="block px-28 opacity-1 m-2"></hr>
      {error && <p>Error fetching data: {error.message}</p>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <Guestcard message={message} />
              </li>
            ))}
          </ul>
          <hr className="block px-24 p-10 mt-2 opacity-0"></hr>
        </>
      )}
    </div>
  )
}
