'use client';
import logo from '../assets/logo.png'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LottieFiles from './LottieFiles';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] py-10 sm:py-14 lg:py-20 px-4">

      {/* Floating Book Top Left */}
      <div className="absolute top-6 left-2 sm:left-8 animate-bounce opacity-20">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
          alt="book"
          width={70}
          height={70}
          className="rotate-[-20deg]"
        />
      </div>

      {/* Floating Book Bottom Right */}
      <div className="absolute bottom-8 right-2 sm:right-10 animate-pulse opacity-20">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
          alt="book"
          width={90}
          height={90}
          className="rotate-12"
        />
      </div>

      {/* Big Background Book */}
      <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 animate-spin-slow">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2702/2702134.png"
          alt="book"
          width={260}
          height={260}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-lg rounded-[30px] shadow-2xl p-5 sm:p-8 md:p-12">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={60}
                className="hover:rotate-12 transition-transform duration-300"
              />

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
                Study <span className="text-[#84B179]">Nook</span>
              </h2>
            </Link>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-800">
                Find Your Perfect
                <br />
                <span className="text-[#84B179]">
                  Study Room
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                Browse and book peaceful private study rooms near you.
                Discover the perfect environment to focus, learn, and grow.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                href="/signup"
                className="bg-[#84B179] hover:bg-[#709b5e] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>

              <Link
                href="/rooms"
                className="border-2 border-[#84B179] text-[#84B179] hover:bg-[#84B179] hover:text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                View Rooms
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-3">

              <div className="bg-[#F5FFF1] rounded-2xl px-5 py-4 shadow-md min-w-[120px]">
                <h3 className="text-2xl font-bold text-[#84B179]">500+</h3>
                <p className="text-gray-600 text-sm">Study Rooms</p>
              </div>

              <div className="bg-[#F5FFF1] rounded-2xl px-5 py-4 shadow-md min-w-[120px]">
                <h3 className="text-2xl font-bold text-[#84B179]">2K+</h3>
                <p className="text-gray-600 text-sm">Students</p>
              </div>

              <div className="bg-[#F5FFF1] rounded-2xl px-5 py-4 shadow-md min-w-[120px]">
                <h3 className="text-2xl font-bold text-[#84B179]">24/7</h3>
                <p className="text-gray-600 text-sm">Access</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-[#84B179]/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Lottie Animation */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] animate__animated animate__zoomIn">
              <LottieFiles />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;