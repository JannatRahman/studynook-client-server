
import React from 'react';

import LottieFiles from './LottieFiles';
import Image from 'next/image';
import Link from 'next/link';


const Banner = () => {
  
  return (
    <div className='bg-[#C7EABB]'>
      <div className='flex bg-white max-h-xl max-w-5xl mx-auto  rounded-lg items-center p-4'>
        <div className='space-y-3 pl-5'>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="transition-transform duration-300 hover:rotate-12"
            />
            <h3 className="font-black text-5xl">Study <span className="text-[#84B179]">Nook</span></h3>
          </Link>
    <h2 className='text-2xl font-bold pb-5'>Find Your Perfect Study Room</h2>
   <p className='text-lg'>Browse and book quiet, private study rooms in your library. List your own room and earn.</p>
   <div className="flex items-center gap-2 md:gap-3">

            <Link
              href="/signup"
              className="bg-[#84B179] px-3 md:px-4 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition text-sm md:text-base"
            >
              Get Started
            </Link>

            <Link
              href="/signin"
              className="border border-[#84B179] text-[#84B179] px-3 md:px-4 py-2 rounded-lg font-semibold hover:bg-[#84B179] hover:text-white transition text-sm md:text-base"
            >
             View Rooms
            </Link>
          </div>

      </div>

     <div className='mb-15'>
      <LottieFiles/>
     </div>


      </div> 
    </div>
  );
};

export default Banner;