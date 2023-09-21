import React from "react"

export default function Guestcard({ message }) {

  return (
    <>
      <div className="p-2  text-xs flex gap-2 items-center">
        <img src={message.photo} className="rounded-full w-5" alt="" />
        <div className='flex gap-1'>
          <p className="dark:text-gray-400 text-gray-900">{message.name}:</p>
          <p className='dark:text-gray-100 text-gray-700'>{message.content}</p>
        </div>
      </div>
    </>
  )
}
