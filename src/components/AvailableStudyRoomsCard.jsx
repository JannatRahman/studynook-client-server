import { Star, Bookmark } from "lucide-react";

const AvailableStudyRoomsCard = () => {
  return (
    <div className="w-[320px] rounded-3xl p-6 bg-gradient-to-br from-white to-cyan-100 shadow-xl border border-white/40 relative">
      
      {/* Share icon */}
      <div className="absolute top-4 right-4 text-gray-500 cursor-pointer">
        ⤴
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://i.pravatar.cc/150?img=32"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />

        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Chloe Harrison
        </h2>

        <p className="text-gray-500 text-sm">Product designer</p>

        {/* tags */}
        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 text-xs bg-white/70 rounded-full">
            Figma
          </span>
          <span className="px-3 py-1 text-xs bg-white/70 rounded-full">
            UX Design
          </span>
        </div>
      </div>

      {/* stats */}
      <div className="flex justify-between mt-6 text-center text-sm">
        <div>
          <div className="flex items-center justify-center gap-1 font-semibold">
            <Star size={14} /> 4.5
          </div>
          <p className="text-gray-500 text-xs">Rating</p>
        </div>

        <div>
          <p className="font-semibold">$15K+</p>
          <p className="text-gray-500 text-xs">Earned</p>
        </div>

        <div>
          <p className="font-semibold">$80/hr</p>
          <p className="text-gray-500 text-xs">Rate</p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex items-center gap-3 mt-6">
        <button className="flex-1 bg-cyan-500 text-white py-2 rounded-full font-medium hover:bg-cyan-600 transition">
          Get in touch
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
          <Bookmark size={18} />
        </button>
      </div>
    </div>
  );
};

export default AvailableStudyRoomsCard;