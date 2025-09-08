"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage("Successfully joined the waitlist! We'll be in touch soon.")
        setName("")
        setEmail("")
      } else {
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white font-sans">
      {/* Animated Background */}
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="EducationLM Logo"
            width={300}
            height={75}
            className="h-10 w-auto"
          />
        </div>
        <nav>
          <a
            className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 hover:scale-105"
            href="mailto:educationlm.ai@gmail.com"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black text-balance">
              Learning, reimagined for tomorrow.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 text-pretty">
              Our AI-powered platform is designed to revolutionize your educational journey. Get ready for a
              personalized learning experience like no other. Sign up for exclusive early access.
            </p>
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div className="flex flex-col space-y-3">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors disabled:opacity-50"
                  aria-label="Full name"
                />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors disabled:opacity-50"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
              {message && <p className={`text-sm mt-3 ${isSuccess ? "text-green-600" : "text-red-600"}`}>{message}</p>}
            </form>
          </div>
        </div>
      </div>

      <footer className="relative z-10 p-6 flex justify-center items-center space-x-6">
        <a
          href="https://instagram.com/educationlm.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/company/educationlm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors"
          aria-label="Follow us on LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </footer>
    </div>
  )
}
