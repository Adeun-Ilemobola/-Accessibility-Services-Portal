import DouglasLogo from '@/components/DouglasLogo'
import Nav from '@/components/Nav'
import { ArrowUpIcon, BookMarked, CalendarRange, Folder, FolderIcon, HomeIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
const iconSize = 145

export default function Page() {
  return (
    <div className=' flex flex-col items-center justify-center min-h-screen'>

      <div className=' flex flex-col flex-1 w-[75%]'>
        <Nav />
        <div className=' flex flex-col flex-1'>
          <div className=' flex flex-col gap-4 '>
            <h1 className='text-3xl font-bold '>
              Welcome to the Douglas College Accessibility Services Portal
            </h1>
            <h1 className='text-xl font-bold opacity-75'>Please select an option from the menu below:</h1>
          </div>


          <div className=' flex flex-col flex-1 items-center p-3.5 '>

            <div className=' grid grid-cols-2 grid-rows-2 gap-5'>
              {/* Request Accommodations - Orange theme */}

              <Link href="/home/requestAccommodations">
                <Box
                  backIcon={<CalendarRange size={iconSize} className="rotate-45" />}
                  text="Request Accommodations"
                  borderColor="border-orange-400/30"
                  backgroundColor="bg-orange-600/25"
                  textColor="text-orange-50"
                  hoverBorderColor="hover:border-orange-300/50"
                  hoverBackgroundColor="hover:bg-orange-500/35"
                  hoverTextColor="hover:text-white"
                />
              </Link>
              {/* Request a Test or Exam - Blue theme */}

              <Link href="/home/requestTestOrExam">
                <Box
                  backIcon={<BookMarked size={iconSize} className="rotate-45" />}
                  text="Request a Test or Exam"
                  borderColor="border-blue-400/30"
                  backgroundColor="bg-blue-600/25"
                  textColor="text-blue-50"
                  hoverBorderColor="hover:border-blue-300/50"
                  hoverBackgroundColor="hover:bg-blue-500/35"
                  hoverTextColor="hover:text-white"
                />
              </Link>
              {/* Request Notes - Yellow theme */}

              <Link href="/home/requestNotes">
                <Box
                  backIcon={<CalendarRange size={iconSize} className="rotate-45" />}
                  text="Request Notes"
                  borderColor="border-yellow-400/30"
                  backgroundColor="bg-yellow-600/25"
                  textColor="text-yellow-50"
                  hoverBorderColor="hover:border-yellow-300/50"
                  hoverBackgroundColor="hover:bg-yellow-500/35"
                  hoverTextColor="hover:text-white"
                />
              </Link>
              {/* Request Alternate Format - Amber/Orange theme */}

              <Link href="/home/requestAlternateFormat">

                <Box
                  backIcon={<Folder size={iconSize} className="rotate-45" />}
                  text="Request Alternate Format"
                  borderColor="border-amber-400/30"
                  backgroundColor="bg-amber-600/25"
                  textColor="text-amber-50"
                  hoverBorderColor="hover:border-amber-300/50"
                  hoverBackgroundColor="hover:bg-amber-500/35"
                  hoverTextColor="hover:text-white"
                />
              </Link>
            </div>

            {/* Request Accommodations - Orange/Red theme */}



          </div>


        </div>



      </div>

    </div>
  )
}


//
function Box({
  backIcon,
  text,
  borderColor = 'border-white',
  backgroundColor = 'bg-white',
  textColor = 'text-white',
  hoverBorderColor = 'hover:border-white',
  hoverBackgroundColor = 'hover:bg-white',
  hoverTextColor = 'hover:text-white'
}: {
  backIcon: React.ReactNode;
  text: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}) {
  return (
    <div className={`
      relative flex items-center justify-center 
      w-150 h-48 rounded-2xl
      ${borderColor}/30 ${backgroundColor}/25
        ${borderColor} ${backgroundColor}
      ${hoverBorderColor} ${hoverBackgroundColor}
      border backdrop-blur-lg backdrop-saturate-150
      shadow-lg shadow-black/10
      overflow-hidden
    `}>
      {/* Large background icon filling the left side */}
      <div className="absolute left-0 top-0 h-full w-1/3 flex items-center justify-center opacity-15 pointer-events-none">
        <div className="scale-150">
          {backIcon}
        </div>
      </div>

      {/* Centered text */}
      <h1 className={`text-4xl font-bold ${textColor} ${hoverTextColor} z-10 relative transition-colors duration-300`}>
        {text}
      </h1>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}