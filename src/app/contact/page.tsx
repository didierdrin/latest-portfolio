'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

export default function ContactPage() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkTheme = () => {
      const dark = document.documentElement.classList.contains('dark')
      setIsDark(dark)
    }

    checkTheme() // initial check

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

  if (!mounted) return null

  return (
    <main className="min-h-screen px-8 py-12 font-sans transition-colors duration-300">
      <nav className="flex justify-between items-center text-sm mb-16">
        <div className="flex gap-8">
          <a href="/" className="hover:underline">BIO</a>
          <a href="/work" className="hover:underline">WORK</a>
        </div>
        <div className="flex items-center">
          <a href="/contact" className="hover:underline font-bold">CONTACT</a>
          <ThemeToggle />
        </div>
      </nav>

      <header className="mb-16">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Let’s Connect<span className="text-blue-500">.</span>
        </h1>
        <p className="text-lg mt-4 max-w-xl" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
          Whether you're looking for collaboration, freelance work, or just a good conversation, feel free to reach out!
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
            <li><strong>Email:</strong>{' '}
              <a href="mailto:didiercode20@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                didiercode20@gmail.com
              </a>
            </li>
            <li><strong>Phone:</strong> +250 798 922 640</li>
            <li><strong>Location:</strong> Kigali, RW</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <ul className="space-y-2" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
            <li><a href="https://twitter.com/zerotonine09" className="hover:underline text-blue-600 dark:text-blue-400">X</a></li>
            <li><a href="https://github.com/didierdrin" className="hover:underline text-blue-600 dark:text-blue-400">GitHub</a></li>
          </ul>
        </div>
      </section>
    </main>
  )
}


// // app/contact/page.tsx
// 'use client'
// import { useSearchParams } from 'next/navigation'
// import ThemeToggle from '@/components/ThemeToggle'

// export default function ContactPage() {
//   const searchParams = useSearchParams()
//   const theme = searchParams.get('theme')
//   const isDark = theme === 'dark'

//   return (
//     <main className="min-h-screen px-8 py-12 font-sans transition-colors duration-300">
//       {/* Navigation */}
//       <nav className="flex justify-between items-center text-sm mb-16">
//         <div className="flex gap-8">
//           <a href="/" className="hover:underline">BIO</a>
//           <a href="/work" className="hover:underline">WORK</a>
//         </div>
//         <div className="flex items-center">
//           <a href="/contact" className="hover:underline font-bold">CONTACT</a>
//           <ThemeToggle />
//         </div>
//       </nav>

//       {/* Header */}
//       <header className="mb-16">
//         <h1 className="text-6xl md:text-7xl font-bold leading-tight">
//           Let’s Connect<span className="text-blue-500">.</span>
//         </h1>
//         <p className="text-lg text-gray-700 mt-4 max-w-xl" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
//           Whether you're looking for collaboration, freelance work, or just a good conversation, feel free to reach out!
//         </p>
//       </header>

//       {/* Contact Info & Social Links */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base">
//         {/* Contact Info */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
//           <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//             <li>
//               <strong>Email:</strong>{' '}
//               <a href="mailto:didiercode20@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
//                 didiercode20@gmail.com
//               </a>
//             </li>
//             <li><strong>Phone:</strong> +250 798 922 640</li>
//             <li><strong>Location:</strong> Kigali, RW</li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Social Media</h2>
//           <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//             <li>
//               <a href="https://twitter.com/zerotonine09" className="hover:underline text-blue-600 dark:text-blue-400">X</a>
//             </li>
//             {/* <li>
//               <a href="https://linkedin.com/in/yourprofile" className="hover:underline text-blue-600 dark:text-blue-400">LinkedIn</a>
//             </li> */}
//             <li>
//               <a href="https://github.com/didierdrin" className="hover:underline text-blue-600 dark:text-blue-400">GitHub</a>
//             </li>
//             {/* <li>
//               <a href="https://dribbble.com/yourprofile" className="hover:underline text-blue-600 dark:text-blue-400">Dribbble</a>
//             </li> */}
//           </ul>
//         </div>
//       </section>
//     </main>
//   )
// }
