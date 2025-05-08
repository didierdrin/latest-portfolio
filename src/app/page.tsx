'use client'

import ThemeToggle from '@/components/ThemeToggle'
import { useState, useEffect } from 'react'

export default function BioPage() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains('dark')
      setIsDark(dark)
    }
    
    // Check initial theme
    checkTheme()
    
    // Set up a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme()
        }
      })
    })
    
    observer.observe(document.documentElement, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

  if (!mounted) {
    return null // Wait until client-side to avoid hydration mismatch
  }

  return (
    <main className="min-h-screen px-8 py-12 font-sans transition-colors duration-300">
      <nav className="flex justify-between items-center text-sm mb-16">
        <div className="flex gap-8">
          <a href="/" className="hover:underline font-bold">BIO</a>
          <a href="/work" className="hover:underline">WORK</a>
        </div>
        <div className="flex items-center">
          {/* <a href="/contact" className="hover:underline">CONTACT</a> */}
          <a href={`/contact?theme=${isDark ? 'dark' : 'light'}`}  className="hover:underline">CONTACT</a>
          <ThemeToggle />
        </div>
      </nav>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h1 className="text-6xl font-bold leading-tight mb-4">Hello<span className={ isDark? "text-blue-900" : "text-orange-400" }>!</span></h1>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold italic">Didier Nsengiyumva</span>, based in Kigali - Rwanda, currently freelancing.
          </p>
        </div>

     

<div className="md:col-span-1 text-sm leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
  <p className="text-xs mb-2" style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>(02)</p>
  <p className="mb-4">
  Persistent software developer fluent in Flutter (Dart), JavaScript (Next.js, React), and Python (Flask, Django). Experienced with building scalable backends using Firebase, PostgreSQL, MySQL, and Spring Boot.
</p>
<p>
  Passionate about crafting elegant, high-performance digital experiences and robust REST APIs that power real-world solutions.
</p>

  
</div>



        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden aspect-square w-full">
            <img 
              src={isDark ? "/didier-dark.jpg" : "/didier-light.jpg"}
              alt="Didier"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

