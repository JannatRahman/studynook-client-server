'use client';

import logo from '../assets/logo.png';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LottieFiles from './LottieFiles';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20">

     
      <div className="absolute top-3 left-2 sm:top-6 sm:left-6 md:left-10 animate-bounce opacity-20">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
          alt="book"
          width={70}
          height={70}
          className="w-10 sm:w-14 md:w-[70px] h-auto rotate-[-20deg]"
        />
      </div>

    
      <div className="absolute bottom-3 right-2 sm:bottom-8 sm:right-6 md:right-10 animate-pulse opacity-20">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
          alt="book"
          width={90}
          height={90}
          className="w-14 sm:w-20 md:w-[90px] h-auto rotate-12"
        />
      </div>

    
      <div className="absolute hidden xl:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 animate-spin-slow">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2702/2702134.png"
          alt="book"
          width={260}
          height={260}
          className="w-[220px] 2xl:w-[260px] h-auto"
        />
      </div>

     
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-white/80 backdrop-blur-xl rounded-[24px] md:rounded-[32px] shadow-2xl p-5 sm:p-8 md:p-10 lg:p-14">

         
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">

          
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={60}
                className="w-12 sm:w-14 md:w-[60px] h-auto hover:rotate-12 transition-transform duration-300"
              />

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 leading-none animate__animated animate__shake">
                Study <span className="text-[#84B179]">Nook</span>
              </h2>
            </Link>

    
            <div className="space-y-4">

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-800">
                Find Your Perfect
                <br />
                <span className="text-[#84B179]">
                  Study Room
                </span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Browse and book peaceful private study rooms near you.
                Discover the perfect environment to focus, learn, and grow.
              </p>

            </div>


            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">

              <Link
                href="/signup"
                className="w-full sm:w-auto text-center bg-[#84B179] hover:bg-[#709b5e] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>

              <Link
                href="/all-rooms"
                className="w-full sm:w-auto text-center border-2 border-[#84B179] text-[#84B179] hover:bg-[#84B179] hover:text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                View Rooms
              </Link>

            </div>

      
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">

              <div className="bg-[#F5FFF1] rounded-2xl px-4 py-4 shadow-md">
                <h3 className="text-xl sm:text-2xl font-bold text-[#84B179]">
                  500+
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Study Rooms
                </p>
              </div>

              <div className="bg-[#F5FFF1] rounded-2xl px-4 py-4 shadow-md">
                <h3 className="text-xl sm:text-2xl font-bold text-[#84B179]">
                  2K+
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Students
                </p>
              </div>

              <div className="bg-[#F5FFF1] rounded-2xl px-4 py-4 shadow-md col-span-2 sm:col-span-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#84B179]">
                  24/7
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Access
                </p>
              </div>

            </div>
          </div>

       
          <div className="relative flex items-center justify-center order-1 lg:order-2">

         
            <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] bg-[#84B179]/20 rounded-full blur-3xl animate-pulse"></div>

        
            <div className="relative z-10 w-full max-w-[220px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[500px] animate__animated animate__zoomIn">
              <LottieFiles />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;