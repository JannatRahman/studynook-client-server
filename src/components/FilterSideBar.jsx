'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(
    searchParams.get('minPrice') || ''
  );
  const [maxPrice, setMaxPrice] = useState(
    searchParams.get('maxPrice') || ''
  );
  const [minFloor, setMinFloor] = useState(
    searchParams.get('minFloor') || ''
  );
  const [maxFloor, setMaxFloor] = useState(
    searchParams.get('maxFloor') || ''
  );

  const selectedAmenities =
    searchParams.get('amenities')?.split(',') || [];

  const amenitiesList = [
    'WiFi',
    'AC',
    'Projector',
    'Quiet Zone',
    'Power Outlets',
    'Air Conditioning',
    'Smart TV',
    'Whiteboard',
    'Conference Table',
    'Desk Lamp',
  ];

  const handleAmenityChange = (amenity) => {
    const params = new URLSearchParams(searchParams.toString());

    let amenities =
      params.get('amenities')?.split(',') || [];

    if (amenities.includes(amenity)) {
      amenities = amenities.filter(
        (item) => item !== amenity
      );
    } else {
      amenities.push(amenity);
    }

    if (amenities.length > 0) {
      params.set('amenities', amenities.join(','));
    } else {
      params.delete('amenities');
    }

    router.push(`/all-rooms?${params.toString()}`);
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Get all form data as object
    const formEntries = Object.fromEntries(
      formData.entries()
    );

    console.log('Form Entries:', formEntries);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (formEntries.minPrice) {
      params.set('minPrice', formEntries.minPrice);
    } else {
      params.delete('minPrice');
    }

    if (formEntries.maxPrice) {
      params.set('maxPrice', formEntries.maxPrice);
    } else {
      params.delete('maxPrice');
    }

    if (formEntries.minFloor) {
      params.set('minFloor', formEntries.minFloor);
    } else {
      params.delete('minFloor');
    }

    if (formEntries.maxFloor) {
      params.set('maxFloor', formEntries.maxFloor);
    } else {
      params.delete('maxFloor');
    }

    router.push(`/all-rooms?${params.toString()}`);

    try {
      const response = await fetch(
        '/api/filter-rooms',
        
      );

      const data = await response.json();

      console.log('Backend Response:', data);
    } catch (error) {
      console.error(error);
    }
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setMinFloor('');
    setMaxFloor('');

    router.push('/all-rooms');
  };

  return (
    <div className="p-4 bg-[#E8F5BD] rounded-xl">
      <form onSubmit={handleFilterSubmit}>
        <div className="flex flex-wrap gap-8">

          {/* Amenities */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Amenities
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(
                      amenity
                    )}
                    onChange={() =>
                      handleAmenityChange(amenity)
                    }
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Price Range
            </h3>

            <div className="space-y-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(e.target.value)
                }
                className="w-full border rounded p-2"
              />

              <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(e.target.value)
                }
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          {/* Floor Range */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Floor Range
            </h3>

            <div className="space-y-2">
              <select
                name="minFloor"
                value={minFloor}
                onChange={(e) =>
                  setMinFloor(e.target.value)
                }
                className="w-full border rounded p-2"
              >
                <option value="">
                  Minimum Floor
                </option>

                {[1, 2, 3, 4, 5].map((floor) => (
                  <option
                    key={floor}
                    value={floor}
                  >
                    {floor}
                    {floor === 1
                      ? 'st'
                      : floor === 2
                      ? 'nd'
                      : floor === 3
                      ? 'rd'
                      : 'th'}{' '}
                    Floor
                  </option>
                ))}
              </select>

              <select
                name="maxFloor"
                value={maxFloor}
                onChange={(e) =>
                  setMaxFloor(e.target.value)
                }
                className="w-full border rounded p-2"
              >
                <option value="">
                  Maximum Floor
                </option>

                {[1, 2, 3, 4, 5].map((floor) => (
                  <option
                    key={floor}
                    value={floor}
                  >
                    {floor}
                    {floor === 1
                      ? 'st'
                      : floor === 2
                      ? 'nd'
                      : floor === 3
                      ? 'rd'
                      : 'th'}{' '}
                    Floor
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="submit"
            className="bg-[#84B179] text-white px-5 py-2 rounded font-semibold"
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

