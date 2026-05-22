'use client';

import Image from "next/image";
import { Card, Button, Chip } from "@heroui/react";
import React from "react";

const MyListingCard = ({ room }) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">

      {/* IMAGE */}
      <div className="relative w-full h-48">
        <Image
          src={room.imageUrl}
          alt={room.destinationName}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

       

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {room.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" color="primary">
            Floor: {room.floor}
          </Chip>

          <Chip size="sm" color="secondary">
            Capacity: {room.capacity}
          </Chip>

          <Chip size="sm" color="success">
            ${room.hourlyRate}/hr
          </Chip>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 pt-1">
          {Array.isArray(room.category)
            ? room.category.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))
            : (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {room.category}
              </span>
            )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 pt-3">
          <Button size="sm" className="w-full bg-[#84B179] text-white">
            View
          </Button>

          <Button size="sm" color="danger" className="w-full">
            Delete
          </Button>
        </div>

      </div>
    </Card>
  );
};

export default MyListingCard;