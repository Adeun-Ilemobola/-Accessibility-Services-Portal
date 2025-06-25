import Image from 'next/image'
import React from 'react'

export default function BlurBackImg ({children}:{  children: React.ReactNode;}) {
  return (
    <div className=' relative min-w-screen min-h-screen'>
         {/* Blurred background image */}
      <Image
        src={"/op.jpg"}
        alt={"kjsdhfkjhsdf"}
        fill
        style={{ objectFit: "cover" }}
        className="z-0 h-full w-full "
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur bg-emerald-700/45" />


        {/* Children content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen min-w-full">
        {children}
      </div>

        
    </div>
  )
}
