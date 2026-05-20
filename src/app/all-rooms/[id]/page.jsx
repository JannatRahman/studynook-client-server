import { fetchFeaturedRooms, fetchRooms } from "@/lib/rooms/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BarChart, BookOpen, Clock, Clock3, MapPin, Users, Users2 } from "lucide-react";
import { RxCountdownTimer } from "react-icons/rx";

export const metadata = {
  title: "Room Details",
  
};


const RoomDetailsPage = async ({
  params }) => {

    

  const { id } = await params;
  // const room = await fetchSingleRooms(id);
  // console.log(room);

  // fetch all rooms
  const studyrooms = await fetchRooms();

  // // find selected room
  const room = studyrooms?.find(
    (item) => String(item._id) === String(id)
  );
  const featuredItems = [
      { icon: RxCountdownTimer, label: room.hourlyRate ||  '12h 30m' },
      { icon: Users2, label: room?.capacity ||  `0 Students` },
      
 
      
  ];


  // not found UI
  if (!room) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">
          Room Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f6faef] px-4 py-10 sm:px-6 lg:px-12">

      {/* Back Button */}
      <Link
        href="/all-rooms"
        className="
          mb-8 inline-flex items-center gap-2
          rounded-full bg-white px-5 py-2.5
          text-sm font-medium text-gray-700
          shadow-md transition hover:scale-105
        "
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Main Card */}
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden
          rounded-[40px]
          border border-white/40
          bg-gradient-to-br
          from-[#C7EABB]
          via-[#d9f0cb]
          to-[#E8F5BD]
          p-6 lg:p-10
          shadow-[0_20px_80px_rgba(132,177,121,0.25)]
        "
      >

        <div className="grid gap-10 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[32px]">
            <Image
              src={room?.image}
              alt={room?.name}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">

            <h1 className="text-4xl font-extrabold text-gray-800">
              {room?.name}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              {room?.description}
            </p>

            {/* INFO BOXES */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <div className="rounded-3xl bg-white/60 p-4">
                <MapPin className="mb-2 text-[#84B179]" />
                <p className="text-sm text-gray-500">Floor</p>
                <h3 className="font-bold text-gray-800">
                  {room?.floor}
                </h3>
              </div>

              <div className="rounded-3xl bg-white/60 p-4">
                <Users className="mb-2 text-[#84B179]" />
                <p className="text-sm text-gray-500">Capacity</p>
                <h3 className="font-bold text-gray-800">
                  {room?.capacity}
                </h3>
              </div>

              <div className="rounded-3xl bg-white/60 p-4">
                <Clock3 className="mb-2 text-[#84B179]" />
                <p className="text-sm text-gray-500">Hourly Rate</p>
                <h3 className="font-bold text-gray-800">
                  {room?.hourlyRate}
                </h3>
              </div>

            </div>

            {/* AMENITIES */}
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold text-gray-800">
                Amenities
              </h2>

              <div className="flex flex-wrap gap-3">
                {room?.amenities?.map((item, index) => (
                  <span
                    key={index}
                    className="
                      rounded-full bg-white/60
                      px-4 py-2 text-sm
                      text-gray-700
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button
              className=" w-full
                mt-10 w-fit rounded-2xl
                bg-[#84B179]
                px-8 py-4
                font-semibold text-white
                shadow-lg shadow-[#84B179]/30
                transition hover:scale-105
              "
            >
              Book Now
            </button>

          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
          {featuredItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200 text-slate-900 font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-blue-600" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsPage;