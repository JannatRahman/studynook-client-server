'use client';

import { useMemo, useState } from "react";
import RoomsCard from "./RoomsCard";

const RoomsFilter = ({ rooms }) => {

  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const amenitiesOptions = [
    "WiFi",
    "Projector",
    "AC",
    "Whiteboard",
    "Quiet Zone",
  ];

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

const filteredRooms = rooms?.filter((room) => {
  const roomAmenities = Array.isArray(room?.amenities)
    ? room.amenities
    : typeof room?.amenities === "string"
    ? room.amenities.split(",").map((a) => a.trim())
    : [];

  return selectedAmenities.every((selected) =>
    roomAmenities.includes(selected)
  );
}) || [];

  return (
    <div className="space-y-8">

      {/* Filters */}
      <div className="max-w-xs rounded-2xl border bg-white p-4 shadow">
        <h2 className="mb-3 text-lg font-semibold">
          Filter Amenities
        </h2>

        <div className="space-y-2">
          {amenitiesOptions.map((amenity) => (
            <label
              key={amenity}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
              />

              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <RoomsCard
            key={room._id}
            rooms={room}
          />
        ))}
      </div>

    </div>
  );
};

export default RoomsFilter;