"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterSidebar({ searchTerm }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");

  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const [minFloor, setMinFloor] = useState(searchParams.get("minFloor") || "");

  const [maxFloor, setMaxFloor] = useState(searchParams.get("maxFloor") || "");

  const [selectedAmenities, setSelectedAmenities] = useState(
    searchParams.get("amenities")?.split(",") || [],
  );

  const amenitiesList = [
    "WiFi",
    "AC",
    "Projector",
    "Quiet Zone",
    "Power Outlets",
    "Air Conditioning",
    "Smart TV",
    "Whiteboard",
    "Conference Table",
    "Desk Lamp",
  ];

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) => {
      if (prev.includes(amenity)) {
        return prev.filter((item) => item !== amenity);
      }

      return [...prev, amenity];
    });
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    // const paramsSearch = await searchTerm;
    const params = new URLSearchParams(searchParams.toString());

    if (minPrice.trim()) {
      params.set("minPrice", minPrice);
    }

    if (maxPrice.trim()) {
      params.set("maxPrice", maxPrice);
    }

    if (minFloor) {
      params.set("minFloor", minFloor);
    }

    if (maxFloor) {
      params.set("maxFloor", maxFloor);
    }

    if (selectedAmenities.length > 0) {
      params.set("amenities", selectedAmenities.join(","));
    }
    router.push(`/all-rooms?${params.toString()}`);
  };

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setMinFloor("");
    setMaxFloor("");
    setSelectedAmenities([]);

    router.push("/all-rooms");
  };

  return (
    <div className="p-4 bg-[#E8F5BD] rounded-xl">
      <form onSubmit={handleFilterSubmit}>
        <div className="flex flex-wrap gap-8">
          {/* Amenities */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Amenities</h3>

            <div className="grid grid-cols-2 gap-2">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />

                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Price Range</h3>

            <div className="space-y-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full border rounded p-2"
              />

              <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          {/* Floor Range */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Floor Range</h3>

            <div className="space-y-2">
              <select
                value={minFloor}
                onChange={(e) => setMinFloor(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Minimum Floor</option>

                {[1, 2, 3, 4, 5].map((floor) => (
                  <option key={floor} value={floor}>
                    {floor} Floor
                  </option>
                ))}
              </select>

              <select
                value={maxFloor}
                onChange={(e) => setMaxFloor(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Maximum Floor</option>

                {[1, 2, 3, 4, 5].map((floor) => (
                  <option key={floor} value={floor}>
                    {floor} Floor
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="submit"
            className="bg-[#84B179] text-white px-5 py-2 rounded font-semibold active:scale-95"
          >
            Apply Filters
          </button>

          <button
            type="button"
            onClick={clearFilters}
            className="bg-red-500 text-white px-5 py-2 rounded font-semibold"
          >
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
}