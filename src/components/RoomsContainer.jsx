
import RoomsCard from "@/components/RoomsCard";
import { SearchBar } from "@/components/SearchBar";
import { fetchRooms } from "@/lib/rooms/data";
import FilterSidebar from "./FilterSideBar";

const RoomsContainer = async ({ searchParams }) => {

  
  const searchTerm =await searchParams;
  


  const rooms = await fetchRooms(searchTerm?.searchTerm);
 

  return (
    <div>

     
      <FilterSidebar></FilterSidebar> 
      <SearchBar search={searchTerm} />

 
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
          mt-8
          animate__animated animate__pulse
        "
      >

        {rooms?.length > 0 ? (

          rooms.map((room) => (
            <RoomsCard
              key={room?._id}
              rooms={room}
            />
          ))

        ) : (

          <p className="text-center col-span-full text-slate-500">
            No rooms found
          </p>

        )}

      </div>

    </div>
  );
};

export default RoomsContainer;