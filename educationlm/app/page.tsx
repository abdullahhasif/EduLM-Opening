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
          href="https://instagram.com/educationlm"
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

      <style jsx>{`
        @keyframes move {
          100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
          }
        }
        .background {
          position: absolute;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          background: #ffffff;
          overflow: hidden;
          z-index: 0;
        }
        .background span {
          width: 1vmin;
          height: 1vmin;
          border-radius: 1vmin;
          backface-visibility: hidden;
          position: absolute;
          animation: move;
          animation-duration: 45s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .background span:nth-child(1) {
          color: #000000;
          top: 2%;
          left: 51%;
          animation-duration: 49s;
          animation-delay: -3s;
          transform-origin: -14vw 20vh;
          box-shadow: 2vmin 0 0.30175841129421865vmin currentColor;
        }
        .background span:nth-child(2) {
          color: #000000;
          top: 86%;
          left: 77%;
          animation-duration: 33s;
          animation-delay: -32s;
          transform-origin: 1vw 12vh;
          box-shadow: -2vmin 0 0.4437255140284428vmin currentColor;
        }
        .background span:nth-child(3) {
          color: #000000;
          top: 48%;
          left: 72%;
          animation-duration: 35s;
          animation-delay: -10s;
          transform-origin: -13vw 22vh;
          box-shadow: -2vmin 0 0.9022634336186835vmin currentColor;
        }
        .background span:nth-child(4) {
          color: #000000;
          top: 57%;
          left: 6%;
          animation-duration: 17s;
          animation-delay: -39s;
          transform-origin: -1vw -11vh;
          box-shadow: -2vmin 0 0.4908079632832812vmin currentColor;
        }
        .background span:nth-child(5) {
          color: #000000;
          top: 61%;
          left: 56%;
          animation-duration: 21s;
          animation-delay: -4s;
          transform-origin: -15vw 17vh;
          box-shadow: 2vmin 0 0.354784414605923vmin currentColor;
        }
        .background span:nth-child(6) {
          color: #000000;
          top: 23%;
          left: 36%;
          animation-duration: 5s;
          animation-delay: -19s;
          transform-origin: 9vw -19vh;
          box-shadow: 2vmin 0 1.2285189748680327vmin currentColor;
        }
        .background span:nth-child(7) {
          color: #000000;
          top: 5%;
          left: 3%;
          animation-duration: 35s;
          animation-delay: -40s;
          transform-origin: 1vw -15vh;
          box-shadow: 2vmin 0 0.7712613149959648vmin currentColor;
        }
        .background span:nth-child(8) {
          color: #000000;
          top: 58%;
          left: 49%;
          animation-duration: 13s;
          animation-delay: -2s;
          transform-origin: 7vw -21vh;
          box-shadow: 2vmin 0 0.5332077592471805vmin currentColor;
        }
        .background span:nth-child(9) {
          color: #000000;
          top: 89%;
          left: 17%;
          animation-duration: 24s;
          animation-delay: -18s;
          transform-origin: -1vw -20vh;
          box-shadow: 2vmin 0 0.697415252877112vmin currentColor;
        }
        .background span:nth-child(10) {
          color: #000000;
          top: 32%;
          left: 48%;
          animation-duration: 44s;
          animation-delay: -22s;
          transform-origin: 18vw 15vh;
          box-shadow: 2vmin 0 0.7601550997193635vmin currentColor;
        }
        .background span:nth-child(11) {
          color: #000000;
          top: 40%;
          left: 98%;
          animation-duration: 29s;
          animation-delay: -48s;
          transform-origin: -14vw 2vh;
          box-shadow: -2vmin 0 0.9995167735310636vmin currentColor;
        }
        .background span:nth-child(12) {
          color: #000000;
          top: 7%;
          left: 9%;
          animation-duration: 15s;
          animation-delay: -23s;
          transform-origin: -10vw -14vh;
          box-shadow: -2vmin 0 1.054593430386221vmin currentColor;
        }
        .background span:nth-child(13) {
          color: #000000;
          top: 96%;
          left: 16%;
          animation-duration: 17s;
          animation-delay: -12s;
          transform-origin: -21vw 22vh;
          box-shadow: 2vmin 0 0.5476313791168051vmin currentColor;
        }
        .background span:nth-child(14) {
          color: #000000;
          top: 61%;
          left: 81%;
          animation-duration: 21s;
          animation-delay: -23s;
          transform-origin: -11vw 23vh;
          box-shadow: -2vmin 0 1.2017374828362624vmin currentColor;
        }
        .background span:nth-child(15) {
          color: #000000;
          top: 73%;
          left: 85%;
          animation-duration: 13s;
          animation-delay: -25s;
          transform-origin: 1vw 18vh;
          box-shadow: -2vmin 0 1.0425916053823772vmin currentColor;
        }
        .background span:nth-child(16) {
          color: #000000;
          top: 36%;
          left: 31%;
          animation-duration: 38s;
          animation-delay: -28s;
          transform-origin: 19vw 17vh;
          box-shadow: 2vmin 0 0.7712177309968478vmin currentColor;
        }
        .background span:nth-child(17) {
          color: #000000;
          top: 76%;
          left: 32%;
          animation-duration: 10s;
          animation-delay: -32s;
          transform-origin: -10vw 23vh;
          box-shadow: 2vmin 0 0.5186000288863695vmin currentColor;
        }
        .background span:nth-child(18) {
          color: #000000;
          top: 25%;
          left: 77%;
          animation-duration: 12s;
          animation-delay: -38s;
          transform-origin: -1vw -11vh;
          box-shadow: -2vmin 0 0.8174542035345719vmin currentColor;
        }
        .background span:nth-child(19) {
          color: #000000;
          top: 91%;
          left: 4%;
          animation-duration: 44s;
          animation-delay: -4s;
          transform-origin: 13vw -14vh;
          box-shadow: 2vmin 0 1.157833072979262vmin currentColor;
        }
        .background span:nth-child(20) {
          color: #000000;
          top: 60%;
          left: 9%;
          animation-duration: 25s;
          animation-delay: -20s;
          transform-origin: -11vw 22vh;
          box-shadow: -2vmin 0 0.6139401763787754vmin currentColor;
        }
      `}</style>
    </div>
  )
}
