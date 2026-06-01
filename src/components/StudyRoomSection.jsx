'use client';

import React from 'react';
import { Card, CardBody } from '@heroui/react';
import Image from 'next/image';
import { Clock3, Users, BookOpenCheck } from 'lucide-react';

const StudyRoomSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#C7EABB] to-[#E8F5BD] py-16 px-4 animate__animated animate__bounce">

      
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#84B179]/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#84B179] font-semibold tracking-wide uppercase mb-2">
            Designed for better learning
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
            More Than Just A <br />
            <span className="text-[#84B179]">Study Room</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <Card className="group bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] hover:-translate-y-3 transition-all duration-500 overflow-visible">

            <div className="p-8 text-center relative">

              {/* Floating Icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 rounded-full group-hover:scale-110 transition duration-500">
                <BookOpenCheck className="w-8 h-8 text-[#84B179]" />
              </div>

              {/* Image */}
              <div className="mt-10 mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#84B179]/20 rounded-full blur-2xl animate-pulse"></div>

                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                    alt="study"
                    width={200}
                    height={200}
                    className="rounded-full object-cover h-[200px] w-[200px] border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Distraction-Free Focus
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Study in a calm, quiet environment designed to help you stay productive,
                focused, and motivated for longer sessions.
              </p>
            </div>
          </Card>

          {/* CARD 2 */}
          <Card className="group bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] hover:-translate-y-3 transition-all duration-500 overflow-visible">

            <div className="p-8 text-center relative">

              {/* Floating Icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 rounded-full group-hover:scale-110 transition duration-500">
                <Users className="w-8 h-8 text-[#84B179]" />
              </div>

              {/* Image */}
              <div className="mt-10 mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#84B179]/20 rounded-full blur-2xl animate-pulse"></div>

                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                    alt="group study"
                    width={200}
                    height={200}
                    className="rounded-full object-cover h-[200px] w-[200px] border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Study Together, Grow Together
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Connect with study partners, join group sessions, and stay motivated
                with a community that helps you achieve your goals.
              </p>
            </div>
          </Card>

          {/* CARD 3 */}
          <Card className="group bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] hover:-translate-y-3 transition-all duration-500 overflow-visible">

            <div className="p-8 text-center relative">

              {/* Floating Icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 rounded-full group-hover:scale-110 transition duration-500">
                <Clock3 className="w-8 h-8 text-[#84B179]" />
              </div>

              {/* Image */}
              <div className="mt-10 mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#84B179]/20 rounded-full blur-2xl animate-pulse"></div>

                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                    alt="booking"
                    width={200}
                    height={200}
                    className="rounded-full object-cover h-[200px] w-[200px] border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Book Anytime, Anywhere
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Find and reserve your ideal study space in seconds with flexible
                scheduling, real-time availability, and easy booking.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default StudyRoomSection;