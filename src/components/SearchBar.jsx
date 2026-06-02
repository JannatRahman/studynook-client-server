"use client";

import { Button, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchBar({ searchParams }) {
  const router = useRouter();
  const params = useSearchParams();

  const [searchData, setSearchData] = useState(
    searchParams?.search || ""
  );

  const handleSearch = () => {
    const query = new URLSearchParams(params.toString());

    if (searchData.trim()) {
      query.set("search", searchData);
    } else {
      query.delete("search");
    }

    router.push(`/all-rooms?${query.toString()}`);
  };

  return (
    <div className="w-full flex justify-center">
      <SearchField aria-label="Search rooms">
        <SearchField.Group className="bg-[#E8F5BD] m-5 px-5 py-4 rounded-2xl w-full max-w-xl flex items-center gap-2">

          <SearchField.SearchIcon />

          <SearchField.Input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="Search rooms by name..."
            className="w-full bg-transparent outline-none"
          />

          <SearchField.ClearButton />

          <Button
            className="bg-[#84B179]"
            onClick={handleSearch}
          >
            Search
          </Button>

        </SearchField.Group>
      </SearchField>
    </div>
  );
}

