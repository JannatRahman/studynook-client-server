'use client';

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

const RoomsCard = ({ rooms }) => {
  return (
    <div
      className="
        group
        relative
        w-full
        max-w-[340px]
        mx-auto
        overflow-hidden
        rounded-[32px]
        border border-white/40
        bg-gradient-to-b from-[#C7EABB] via-[#d9f0cb] to-[#E8F5BD]
        p-4 sm:p-5 md:p-6
        shadow-[0_10px_40px_rgba(132,177,121,0.25)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:rotate-[1deg]
        hover:shadow-[0_20px_60px_rgba(132,177,121,0.35)]
      "
    >
     
      {/* Background Blur */}
      <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-white/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#84B179]/20 blur-3xl"></div>

      {/* Top Icon */}
      <div className="absolute right-5 top-5 z-20">
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white/60 backdrop-blur-md
            transition-all duration-300
            group-hover:rotate-12 group-hover:scale-110
          "
        >
          <MoveUpRight
            size={18}
            className="text-gray-700"
          />
        </div>
      </div>

      {/* Image */}
      <div className="relative z-10 overflow-hidden rounded-3xl">
        <Image
          src={rooms?.image || "/placeholder.jpg"}
          alt={rooms?.name || "Room Image"}
          width={400}
          height={300}
          className="
            h-[220px] w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-5 space-y-4 text-center">
        <div className="space-y-2">
          <h2
            className="
              text-xl sm:text-2xl
              font-bold
              tracking-tight
              text-gray-800
            "
          >
            {rooms?.name}
          </h2>

          <p
            className="
              line-clamp-2
              text-sm sm:text-base
              leading-relaxed
              text-gray-600
            "
          >
            {rooms?.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span
            className="
              rounded-full
              bg-white/70
              px-4 py-1.5
              text-xs sm:text-sm
              font-medium
              text-gray-700
              backdrop-blur-md
            "
          >
            {rooms?.floor}
          </span>

          <span
            className="
              rounded-full
              bg-[#84B179]
              px-4 py-1.5
              text-xs sm:text-sm
              font-semibold
              text-white
            "
          >
            ৳{rooms?.hourlyRate}/hr
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap justify-center gap-2">
          {rooms?.amenities?.slice(0, 4).map((item, index) => (
            <span
              key={index}
              className="
                rounded-full
                border border-white/50
                bg-white/50
                px-3 py-1
                text-xs
                text-gray-700
                backdrop-blur-md
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            href={`/rooms/${rooms?._id}`}
            className="
              flex-1
              rounded-2xl
              bg-[#84B179]
              px-4 py-3
              text-center
              text-sm sm:text-base
              font-semibold
              text-white
              shadow-lg shadow-[#84B179]/30
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[#739f68]
              active:scale-95
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;