'use client'

import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const projects = [
  { name: 'Ruz Marketplace', url: 'https://ruz-frontend.vercel.app' },
  { name: 'LinkGov', url: 'https://linkgov.vercel.app' },
  { name: 'GlobalInOne Dashboard', url: 'https://globalinone-dashboard.vercel.app' },
  { name: 'Kilogram Dashboard', url: 'https://kilogram-dashboard.vercel.app' },
  { name: 'Nkundino Dashboard', url: 'https://nkundinodashboard.vercel.app' },
  { name: 'Assigu WA Dashboard', url: 'https://assigu-wa-dashboard.vercel.app' },
  { name: 'Spaceman Dashboard', url: 'https://spaceman-dashboard.vercel.app' },
  { name: 'Spaceman', url: 'https://spaceman-ruddy.vercel.app' },
  { name: 'Peculiar', url: 'https://peculiar-ten.vercel.app' },
  { name: 'SoundStation Dashboard', url: 'https://soundstation-dashboard.vercel.app' },
  { name: 'Nkundino Mini Supermarket', url: 'https://nkundinominisupermarket.vercel.app' },
  { name: 'TriviaTrials', url: 'https://triviatrials.vercel.app' },
  { name: 'IshaTech Group', url: 'https://ishatechgroup.vercel.app' },
  { name: 'GlobalInOne', url: 'https://globalinone.vercel.app' },
  { name: 'Imuhira Dashboard', url: 'https://imuhira-dashboard.vercel.app' },
  { name: 'Imuhira', url: 'https://imuhira.vercel.app' },
  { name: 'SoundStation', url: 'https://soundstation.vercel.app' },
  { name: 'Kadosh Dashboard', url: 'https://shamayim-dash.vercel.app' },
  { name: 'Kadosh', url: 'https://shamayim.vercel.app' },
  { name: 'ClarityIQv 1.0', url: 'https://clarityiqv-1-0.vercel.app' },
  { name: 'ClarityIQ Web', url: 'https://clarityiqweb.vercel.app' },
  { name: 'BKNI Dashboard', url: 'https://bknidashboard.vercel.app' },
  { name: 'Drin’s Portfolio', url: 'https://drinsportfolio.vercel.app' },
  { name: 'BKNI Download', url: 'https://bknidownload.vercel.app' },
  { name: 'Volcano Express', url: 'https://volcanoexpress.vercel.app' },
  { name: 'Dr Appointments', url: 'https://drappointments.vercel.app' },
  { name: 'AIA', url: 'https://aia.vercel.app' },
  { name: 'Louishop', url: 'https://louishop.vercel.app' },
  { name: 'Kadosh Landing', url: 'https://kadoshlanding.vercel.app' },
  { name: 'Inyandiko Nshya', url: 'https://inyandikonshya.vercel.app' },
]

const PROJECTS_PER_PAGE = 6

export default function WorkPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)

  const currentProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

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
        <h2 className="text-6xl md:text-7xl italic font-medium">
          Projects<span className="text-pink-500 text-xl">®</span>
        </h2>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {currentProjects.map((project, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-1">/{project.name}</h3>
            <p className="text-sm text-gray-500 mb-4">Live Project</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-gray-500">Screenshot</span>
              </div>
            </a>
          </div>
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  )
}


// // app/work/page.tsx
// 'use client'

// import ThemeToggle from '@/components/ThemeToggle'

// export default function WorkPage() {
//   return (
//     <main className="min-h-screen px-8 py-12 font-sans transition-colors duration-300">
//       <nav className="flex justify-between items-center text-sm mb-16">
//         <div className="flex gap-8">
//           <a href="/" className="hover:underline">BIO</a>
//           <a href="/work" className="hover:underline font-bold">WORK</a>
//         </div>
//         <div className="flex items-center">
//           <a href="/contact" className="hover:underline">CONTACT</a>
//           <ThemeToggle />
//         </div>
//       </nav>

//       <header className="mb-20">
//         <h1 className="text-6xl md:text-7xl font-bold">Featured</h1>
//         <h2 className="text-6xl md:text-7xl italic font-medium">Projects<span className="text-pink-500 text-xl">®</span></h2>
//       </header>

//                {/* Projects Grid */}
//          {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
           
//            <div>
//              <h3 className="text-xl font-semibold mb-1">/Quarry</h3>
//              <p className="text-sm text-gray-500 mb-4">Web design & Development</p>
//              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
//                <img 
//                 src="/images/quarry.png" 
//                 alt="Quarry Project" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
  
          
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
//         </section> */}

// <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
//   {[
//     { name: 'Ruz', url: 'https://ruz-frontend.vercel.app' },
//     { name: 'LinkGov', url: 'https://linkgov.vercel.app' },
//     { name: 'GlobalInOne Dashboard', url: 'https://globalinone-dashboard.vercel.app' },
//     { name: 'Kilogram Dashboard', url: 'https://kilogram-dashboard.vercel.app' },
//     { name: 'NkundiNo Dashboard', url: 'https://nkundinodashboard.vercel.app' },
//     { name: 'Assigu WA Dashboard', url: 'https://assigu-wa-dashboard.vercel.app' },
//     { name: 'Spaceman Dashboard', url: 'https://spaceman-dashboard.vercel.app' },
//     { name: 'Spaceman', url: 'https://spaceman-ruddy.vercel.app' },
//     { name: 'Peculiar', url: 'https://peculiar-ten.vercel.app' },
//     { name: 'SoundStation Dashboard', url: 'https://soundstation-dashboard.vercel.app' },
//     { name: 'Nkundino Mini Supermarket', url: 'https://nkundinominisupermarket.vercel.app' },
//     { name: 'TriviaTrials', url: 'https://triviatrials.vercel.app' },
//     { name: 'IshaTech Group', url: 'https://ishatechgroup.vercel.app' },
//     { name: 'GlobalInOne', url: 'https://globalinone.vercel.app' },
//     { name: 'Imuhira Dashboard', url: 'https://imuhira-dashboard.vercel.app' },
//     { name: 'Imuhira', url: 'https://imuhira.vercel.app' },
//     { name: 'SoundStation', url: 'https://soundstation.vercel.app' },
//     { name: 'Kadosh Dashboard', url: 'https://shamayim-dash.vercel.app' },
//     { name: 'Kadosh', url: 'https://shamayim.vercel.app' },
//     { name: 'ClarityIQv 1.0', url: 'https://clarityiqv-1-0.vercel.app' },
//     { name: 'ClarityIQ Web', url: 'https://clarityiqweb.vercel.app' },
//     { name: 'BKNI Dashboard', url: 'https://bknidashboard.vercel.app' },
//     { name: 'Drin’s Portfolio', url: 'https://drinsportfolio.vercel.app' },
//     { name: 'BKNI Download', url: 'https://bknidownload.vercel.app' },
//     { name: 'Volcano Express', url: 'https://volcanoexpress.vercel.app' },
//     { name: 'Dr Appointments', url: 'https://drappointments.vercel.app' },
//     { name: 'AIA', url: 'https://aia.vercel.app' },
//     { name: 'Louishop', url: 'https://louishop.vercel.app' },
//     { name: 'Kadosh Landing', url: 'https://kadoshlanding.vercel.app' },
//     { name: 'Inyandiko Nshya', url: 'https://inyandikonshya.vercel.app' },
//   ].map((project, idx) => (
//     <div key={idx}>
//       <h3 className="text-xl font-semibold mb-1">/{project.name}</h3>
//       <p className="text-sm text-gray-500 mb-4">Live Project</p>
//       <a href={project.url} target="_blank" rel="noopener noreferrer">
//         <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
//           <span className="text-gray-500">Add Screenshot</span>
//         </div>
//       </a>
//     </div>
//   ))}
// </section>

//     </main>
//   )
// }


  