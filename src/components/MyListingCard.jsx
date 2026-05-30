'use client';

import Image from "next/image";
import { Card, Button, Chip } from "@heroui/react";
import React from "react";
import Link from "next/link";
import DeleteBookingButton from "./DeleteBookingButton";

const MyListingCard = ({ room }) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">

      {/* IMAGE */}
      <div className="relative w-full h-48">
        <Image
          src={room?.image}
          alt={room?.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

       <p className="font-bold text-lg">{room?.name}</p>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {room?.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" color="primary">
            Floor: {room?.floor}
          </Chip>

          <Chip size="sm" color="secondary">
            Capacity: {room?.capacity}
          </Chip>

          <Chip size="sm" color="success">
            ${room?.hourlyRate}/hr
          </Chip>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 pt-1">
          {Array.isArray(room?.category)
            ? room?.category.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))
            : (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {room?.category}
              </span>
            )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-10 items-center pt-3 justify-center">
          <Link
            href={`/all-rooms/${room?._id}`}
            className="
              flex 
              
              bg-[#84B179]
              px-7 py-2
              text-center
              text-lg sm:text-base
              font-semibold
              text-white
              shadow-lg shadow-[#84B179]/30
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[#739f68]
              active:scale-95
            "
          >
         View
          </Link>

          
          
          <DeleteBookingButton room={room} />
         
        </div>

      </div>
    </Card>
  );
};

export default MyListingCard;