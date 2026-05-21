'use client';

import { SearchField } from "@heroui/react";

export function SearchBar({ search, setSearch }) {
  return (
    <div>

      <SearchField name="search">

        <SearchField.Group className="bg-[#E8F5BD] m-5 p-5 rounded-2xl">

          <SearchField.SearchIcon />

          <SearchField.Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[280px] bg-transparent outline-none"
            placeholder="Search rooms..."
          />

          <SearchField.ClearButton />

        </SearchField.Group>

      </SearchField>

    </div>
  );
}