import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <img className='h-16 lg:h-24 object-contain' src="/assets/chirag-logo.png" alt="Chirag" />

      <div className="text-white text-right">
  <p className="text-[10px] lg:text-sm opacity-70">
    © 2026 Personal Portfolio. All rights reserved.
  </p>

  <p className="text-[10px] lg:text-sm mt-1">
    Designed & Developed by 
    <span className="font-semibold ml-1">Chirag </span>
  </p>
</div>
    </div>
  )
}
