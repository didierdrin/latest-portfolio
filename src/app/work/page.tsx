// app/work/page.tsx
'use client'

import ThemeToggle from '@/components/ThemeToggle'

export default function WorkPage() {
  return (
    <main className="min-h-screen px-8 py-12 font-sans transition-colors duration-300">
      <nav className="flex justify-between items-center text-sm mb-16">
        <div className="flex gap-8">
          <a href="/" className="hover:underline">BIO</a>
          <a href="/work" className="hover:underline font-bold">WORK</a>
        </div>
        <div className="flex items-center">
          <a href="/contact" className="hover:underline">CONTACT</a>
          <ThemeToggle />
        </div>
      </nav>

      <header className="mb-20">
        <h1 className="text-6xl md:text-7xl font-bold">Featured</h1>
        <h2 className="text-6xl md:text-7xl italic font-medium">Projects<span className="text-pink-500 text-xl">®</span></h2>
      </header>

               {/* Projects Grid */}
         <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Project 1 */}
           <div>
             <h3 className="text-xl font-semibold mb-1">/Quarry</h3>
             <p className="text-sm text-gray-500 mb-4">Web design & Development</p>
             <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
               <img 
                src="/images/quarry.png" 
                alt="Quarry Project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Project 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-1">/Squadhub</h3>
            <p className="text-sm text-gray-500 mb-4">Web design, Dashboard & Development</p>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/images/squadhub.png" 
                alt="Squadhub Project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
    </main>
  )
}


// // app/work/page.tsx

// export default function WorkPage() {
//     return (
//       <main className="bg-white text-black min-h-screen px-8 py-12 font-sans">
//         {/* Navigation */}
//         <nav className="flex justify-between items-center text-sm mb-16">
//           <div className="flex gap-8">
//             <a href="/" className="hover:underline">BIO</a>
//             <a href="/work" className="hover:underline font-bold">WORK</a>
//           </div>
//           <a href="/contact" className="hover:underline">CONTACT</a>
//         </nav>
  
//         {/* Header */}
//         <header className="mb-20">
//           <h1 className="text-6xl md:text-7xl font-bold leading-tight">Featured</h1>
//           <h2 className="text-6xl md:text-7xl italic font-medium leading-tight">Projects<span className="align-top text-pink-500 text-xl">®</span></h2>
//         </header>
  
//         {/* Projects Grid */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Project 1 */}
//           <div>
//             <h3 className="text-xl font-semibold mb-1">/Quarry</h3>
//             <p className="text-sm text-gray-500 mb-4">Web design & Development</p>
//             <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
//               <img 
//                 src="/images/quarry.png" 
//                 alt="Quarry Project" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
  
//           {/* Project 2 */}
//           <div>
//             <h3 className="text-xl font-semibold mb-1">/Squadhub</h3>
//             <p className="text-sm text-gray-500 mb-4">Web design, Dashboard & Development</p>
//             <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
//               <img 
//                 src="/images/squadhub.png" 
//                 alt="Squadhub Project" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     );
//   }
  
  