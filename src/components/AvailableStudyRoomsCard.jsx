import { Star, Bookmark } from "lucide-react";
import Image from "next/image";

const AvailableStudyRoomsCard = ({rooms}) => {
  return (
    <div className="w-[320px] rounded-3xl p-6 bg-gradient-to-b from-[#C7EABB] to-[#E8F5BD] shadow-xl border border-white/40 relative">
      
      {/* Share icon */}
      <div className="absolute top-4 right-4 text-gray-500 cursor-pointer">
        ⤴
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={rooms?.image}
          alt="image"
          width={250}
          height={200}
          className="  border-4 border-white shadow-md"
        />

       <div className="space-y-2">
         <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {rooms?.name}
        </h2>

        <p className="text-gray-500 text-sm">{rooms?.description}</p>
       </div>

        {/* tags */}
        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 text-xs bg-white/70 rounded-full">
            {rooms?.floor}
          </span>
          <span className="px-3 py-1 text-xs bg-white/70 rounded-full">
            {rooms?.hourlyRate}
          </span>
        </div>
      </div>

      {/* stats */}
      <div className="flex justify-between mt-6 text-center text-sm">
        <div>
          <div className="flex items-center justify-center gap-1 font-semibold">
            {rooms?.amenities}
          </div>
          
        </div>

        

        
      </div>

      {/* buttons */}
      <div className="flex items-center gap-3 mt-6">
        <button className="bg-[#84B179] w-full px-3 md:px-4 py-2 rounded-2xl font-semibold text-white hover:opacity-90 transition text-sm md:text-base">
          View Rooms
        </button>

        
      </div>
    </div>
  );
};

export default AvailableStudyRoomsCard;