'use client';
import './globals.css'
import Image from 'next/image'
import { useState } from 'react'

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body>
        <nav className="w-full py-4 px-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <a href="/">
                    <Image 
                      src="/Untitled-2.webp"
                      alt="Profile"
                      width={283}
                      height={69}
                      className="w-[150px] md:w-[200px] h-auto object-cover"
                    />
                    </a>
                  </div>

                  {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-red-500 text-sm font-bold">Home</a>
              <a href="/youtube-hero" className="text-gray-600 hover:text-red-500 text-sm font-bold">YouTube Hero</a>
              <a href="/store" className="text-gray-600 hover:text-red-500 text-sm font-bold">Store</a>
              <a href="/work-with-us" className="text-gray-600 hover:text-red-500 text-sm font-bold">Work with us</a>
              <a href="/affiliate" className="text-gray-600 hover:text-red-500 text-sm font-bold">Affiliate Programme</a>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a >
                <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 font-bold font-poppins">Login</button>
              </a>
              <a>
                <button className="px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 glow-button font-bold font-poppins">
                  Join with us!
                </button>
              </a>
            </div>

            {/* Mobile Header Buttons */}
            <div className="md:hidden flex items-center space-x-2">
              <a >
                <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 font-bold font-poppins">
                  Login
                </button>
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <div 
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-out md:hidden z-50 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-4 self-end"
              >
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Menu Items */}
              <div className="flex flex-col space-y-4 p-6">
                <a href="/" className="text-gray-600 text-sm">Home</a>
                <a href="/youtube-hero" className="text-gray-600 text-sm">YouTube Hero</a>
                <a href="/store" className="text-gray-600 text-sm">Store</a>
                <a href="/work-with-us" className="text-gray-600 text-sm">Work with us</a>
                <a href="/affiliate" className="text-gray-600 text-sm">Affiliate Programme</a>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div 
            className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-40 ${
              isMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </nav>
        {children}
      </body>
    </html>
  )
}