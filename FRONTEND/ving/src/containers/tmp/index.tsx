'use client'

import React, { useRef, useEffect } from 'react'
import ChatTest from "./ChatTest";
import VideoPlayer from "@/components/StreamingVideo/Player"

import useStreamingStore from "@/store/StreamingStore";

export default function tmp() {
  const { closePort } = useStreamingStore()

  useEffect (() => {
    closePort('15')
    return () => {
      // closePort()
    }
  }, [])


  return (
    <div>
      <ChatTest />
      <VideoPlayer />
    </div>
  )
}