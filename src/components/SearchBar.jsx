'use client';

import { Button, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchBar({ search }) {

  const router = useRouter();
  const searchParams = useSearchParams();

  // initial value
  const [searchData, setSearchData] = useState(search || '');

  const handleSearch = () => {

    const params = new URLSearchParams(searchParams.toString());

    if (searchData.trim()) {

      params.set('searchTerm', searchData);

    } else {

      params.delete('searchTerm');

    }

    router.push(`/all-rooms?${params.toString()}`);
  };

  return (
    <div className="w-full flex justify-center">

      <SearchField aria-label="Search rooms" name="search">

        <SearchField.Group
          className="
            bg-[#E8F5BD]
            m-5
            px-5
            py-4
            rounded-2xl
            w-full
            max-w-xl
            flex
            items-center
            gap-2
          "
        >

          <SearchField.SearchIcon />

          <SearchField.Input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            className="
              w-full
              bg-transparent
              outline-none
            "
            placeholder="Search rooms by name..."
          />


          <SearchField.ClearButton />

          <div className="ml-10">
            <Button className='  bg-[#84B179]' 
          onClick={handleSearch}>
            Search
          </Button>
          </div>
        </SearchField.Group>

      </SearchField>

    </div>
  );
}