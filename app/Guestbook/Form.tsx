"use client"
import React, { useState } from "react";
import { auth, db, provider } from "@/config/firebase";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  UserCredential,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Form() {
  const [formValue, setFormValue] = useState("");
  const [user, setUser] = useState<User | null>(null); // Specify the type as User | null

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const docRef = await addDoc(collection(db, "guestbook"), {
        name: user.displayName || "Guest",
        content: formValue,
        date: serverTimestamp(),
        photo: user.photoURL,
      });

      console.log("Document written with ID: ", docRef.id);
      setFormValue("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      setUser(res.user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setUser(null); // Clear the user state
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {!user ? (
        <Button
          className="dark:bg-zinc-900"
          variant="outline"
          onClick={handleLogin}
        >
          <GitHubLogoIcon className="w-5 h-5" />
          <span className="flex-nowrap text-xs ml-2">Log in with GitHub </span>
        </Button>
      ) : (
        <>
          <div className="flex gap-1">
            <Input
              type="text"
              placeholder="Your message..."
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />
            <Button variant="ghost" className="" onClick={sendMessage}>
              Sign
            </Button>
          </div>
          <div className="text-xs" onClick={handleLogout}>
            Sign Out
          </div>
        </>
      )}
    </div>
  );
}
