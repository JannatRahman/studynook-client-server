'use client';

import { useEffect, useState } from "react";
import RoomsCard from "@/components/RoomsCard";
import { SearchBar } from "@/components/SearchBar";

const RoomsContainer = () => {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRooms = async (searchText = '') => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/studyrooms?search=${searchText}`,
      {
        cache: 'no-store',
      }
    );

    const data = await res.json();

    setRooms(data);
  };

  useEffect(() => {
    fetchRooms(search);
  }, [search]);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
          mt-8
        "
      >
        {rooms?.map((room) => (
          <RoomsCard
            key={room?._id}
            rooms={room}
          />
        ))}
      </div>
    </>
  );
};

export default RoomsContainer;