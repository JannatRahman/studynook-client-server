'use client';

import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-[#84B179]
        via-[#C7EABB]
        to-[#E8F5BD]
        px-6
        py-16
      "
    >
      {/* Blur Background Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#84B179]/20 blur-3xl"></div>

      {/* Card */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[40px]
          border
          border-white/40
          bg-white/20
          p-8
          sm:p-12
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          text-center
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-white/40
            shadow-lg
            backdrop-blur-md
            animate-bounce
          "
        >
          <SearchX
            size={42}
            className="text-[#5D7B6F]"
          />
        </div>

        {/* 404 Text */}
        <h1
          className="
            mt-8
            text-6xl
            sm:text-7xl
            md:text-8xl
            font-black
            tracking-tight
            text-[#5D7B6F]
          "
        >
          404
        </h1>

        {/* Heading */}
        <h2
          className="
            mt-4
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-800
          "
        >
          Room Not Found
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-4
            max-w-lg
            text-sm
            sm:text-base
            leading-relaxed
            text-gray-600
          "
        >
          Looks like the study room you’re searching for doesn’t exist,
          has been moved, or is currently unavailable.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          <Link
            href="/"
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-[#84B179]
              px-6
              py-3
              text-sm
              sm:text-base
              font-semibold
              text-white
              shadow-lg
              shadow-[#84B179]/30
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#739f68]
            "
          >
            <ArrowLeft size={18} />
            Back To Home
          </Link>

          <Link
            href="/rooms"
            className="
              rounded-2xl
              border
              border-[#84B179]
              bg-white/60
              px-6
              py-3
              text-sm
              sm:text-base
              font-semibold
              text-[#5D7B6F]
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white
              hover:-translate-y-1
            "
          >
            Browse Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;