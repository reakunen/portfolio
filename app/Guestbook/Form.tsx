"use client"

import React, { useState } from "react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { User, signInWithPopup, signOut } from "firebase/auth"
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore"

import { auth, db, provider } from "@/config/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Form() {
  const [formValue, setFormValue] = useState("")
  const [user, setUser] = useState<User | null>(null)

  const sendMessage = async (e: React.FormEvent) => {
    if (formValue.length === 0) {
      return
    }
    e.preventDefault()
    if (!user) return

    try {
      const docRef = await addDoc(collection(db, "guestbook"), {
        name: user.displayName || "Guest",
        content: formValue,
        date: serverTimestamp(),
        photo: user.photoURL,
      })

      console.log("Document written with ID: ", docRef.id)
      setFormValue("")
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }

  const handleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      setUser(res.user)
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteAllData = async () => {
    try {
      if (!user) return // Check if user is authenticated

      // Check if the user has permission to delete data (you may implement more specific checks)
      if (user.uid === "ypiSFQV8EcQYEPo2fKJoQ1YQtWi1") {
        // Query all documents in the "guestbook" collection
        const querySnapshot = await getDocs(collection(db, "guestbook"))

        // Delete each document
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref)
        })

        console.log("All data deleted successfully.")
      } else {
        console.error("User does not have permission to delete data.")
      }
    } catch (error) {
      console.error("Error deleting data: ", error)
    }
  }

  return (
    <div>
      {!user ? (
        <Button
          className="dark:bg-zinc-900 m-2"
          variant="outline"
          onClick={handleLogin}
        >
          <GitHubLogoIcon className="w-5 h-5" />
          <span className="flex-nowrap text-xs ml-2">Log in with GitHub</span>
        </Button>
      ) : (
        <div className="w-screen flex justify-center flex-col mb-2 mt-2">
          <div className="w-screenflex flex justify-center gap-2">
            <Input
              type="text"
              placeholder="Your message..."
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              className="max-w-xs" // Make the input full width
            />
            <Button variant="outline" className="" onClick={sendMessage}>
              Sign
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
