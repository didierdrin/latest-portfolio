'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Check for system preferences and saved theme
  useEffect(() => {
    setMounted(true)
    
    // First check localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      // If no saved preference, check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(systemPrefersDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', systemPrefersDark)
      localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light')
    }
  }, [])

  // Listen for system preference changes
  useEffect(() => {
    if (!mounted) return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mounted])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) {
    return <div className="ml-4 w-4 h-4"></div> // Avoid layout shift during hydration
  }

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle Theme" 
      className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}

// // components/ThemeToggle.tsx
// 'use client'

// import { useEffect, useState } from 'react'
// import { Sun, Moon } from 'lucide-react'

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light')

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
//     if (savedTheme) {
//       setTheme(savedTheme)
//       document.documentElement.classList.toggle('dark', savedTheme === 'dark')
//     }
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light'
//     setTheme(newTheme)
//     localStorage.setItem('theme', newTheme)
//     document.documentElement.classList.toggle('dark', newTheme === 'dark')
//   }

//   return (
//     <button onClick={toggleTheme} aria-label="Toggle Theme" className="ml-4">
//       {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
//     </button>
//   )
// }
