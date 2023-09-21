"use client" 
import React, { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import Form from "./Form";
import Guestcard from "./Guestcard";

// Define an interface for the message data
interface Message {
  id?: string; // Make the 'id' property optional
  content: string;
  date: Date;
  name: string;
  photo: string;
}

export default function GuestbookPage() {
  // Specify the initial state as an empty array of Message objects
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const messagesCollectionRef = collection(db, "guestbook");

        const q = query(
          messagesCollectionRef,
          orderBy("date", "asc"),
          limit(25)
        );

        const data = await getDocs(q);

        const messagesData: any[] = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Set the messages using the correct type
        setMessages(messagesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <>
      <h1>Sign your name here!</h1>
      <Form />
      <ul>
        {messages.map((message, id) => (
          <li key={id}>
            <Guestcard message={message} />
          </li>
        ))}
      </ul>
    </>
  );
}
