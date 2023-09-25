"use client"

import React, { useEffect } from "react";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "@/config/firebase";

import Form from "./Form";
import Guestcard from "./Guestcard";

// Define an interface for the message data
interface Message {
  id?: string;
  content: string;
  date: Date;
  name: string;
  photo: string;
}

const slideInFromBottomVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GuestbookPage() {
  const messagesCollectionRef = collection(db, "guestbook");
  const q = query(messagesCollectionRef, orderBy("date"), limit(25));

  const [messages] = useCollectionData<Message>(q, { idField: "id" });
  const textAnimationControls = useAnimation();
  const formAnimationControls = useAnimation();
  const listAnimationControls = useAnimation();

  useEffect(() => {
    const animateElements = async () => {
      await textAnimationControls.start("visible");
      await formAnimationControls.start("visible");
      await listAnimationControls.start("visible");
    };

    animateElements();
  }, [textAnimationControls, formAnimationControls, listAnimationControls]);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="text-center font-bold text-2xl"
        variants={slideInFromBottomVariant}
        initial="hidden"
        animate={textAnimationControls}
    
      >
        sign my guestbook!
      </motion.h1>
      <motion.div
        className="mt-4"
        variants={slideInFromBottomVariant}
        initial="hidden"
        animate={formAnimationControls}
      >
        <Form />
      </motion.div>
      <motion.ul
        className="mt-4"
        variants={slideInFromBottomVariant}
        initial="hidden"
        animate={listAnimationControls}
      >
        {messages &&
          messages.map((message) => (
            <motion.li key={message.id} variants={slideInFromBottomVariant}>
              <Guestcard message={message} />
            </motion.li>
          ))}
      </motion.ul>
    </div>
  );
}
