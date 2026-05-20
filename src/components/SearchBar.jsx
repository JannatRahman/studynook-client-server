import {Label, SearchField} from "@heroui/react";

export function SearchBar() {
  return (
    <div >

    <SearchField name="search">
      
      <SearchField.Group className='bg-[#E8F5BD] m-5 p-5'>
        <SearchField.SearchIcon />
        <SearchField.Input className="   w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    </div>
  );
}