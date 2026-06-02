import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  Users,

} from "lucide-react";



import DeleteBookingButton from "@/components/DeleteBookingButton";
import { fetchSingleRooms } from "@/lib/rooms/data";
import { OpenModal } from "@/components/OpenModal";
import { EditModalForm } from "@/components/EditModal";
import { TiMediaRecordOutline } from "react-icons/ti";

export const metadata = {
  title: "StudyNook-Details",
};



const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const room = await fetchSingleRooms(id);
  console.log(room);

  const featuredItems = [
    {

      label: room?.hourlyRate || "N/A",
    },
    {

      label: `${room?.bookingCount || 0} Students`,
    },
  ];
  if (!room) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Room not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f6faef] px-3 py-6 sm:px-6 sm:py-10 lg:px-12">


      <div className="mx-auto max-w-7xl">


        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <Link
            href="/all-rooms"
            className="
              inline-flex w-fit items-center gap-2
              rounded-full bg-white px-4 py-2.5
              text-sm font-medium text-gray-700
              shadow-md transition hover:scale-105
            "
          >
            <ArrowLeft size={18} />
            Back
          </Link>


          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <EditModalForm room={room} />
            <DeleteBookingButton room={room} />
          </div>

        </div>

        <div
          className="
            relative overflow-hidden
            rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]
            border border-white/40
            bg-gradient-to-br
            from-[#C7EABB]
            via-[#d9f0cb]
            to-[#E8F5BD]
            p-4 sm:p-6 lg:p-10
            shadow-[0_20px_80px_rgba(132,177,121,0.25)]
          "
        >

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">


            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">

              <Image
                src={
                  room?.image ||
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200"
                }
                alt={room?.name || "Room Image"}
                width={800}
                height={600}
                className="
                  h-[250px] sm:h-[400px] lg:h-full
                  w-full object-cover
                "
              />

            </div>


            <div className="flex flex-col justify-center">

              <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl">
                {room?.name}
              </h1>


              <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base lg:text-lg">
                {room?.description}
              </p>


              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">


                <div className="rounded-2xl sm:rounded-3xl bg-white/60 p-4">

                  <MapPin className="mb-2 text-[#84B179]" />

                  <p className="text-sm text-gray-500">
                    Floor
                  </p>

                  <h3 className="font-bold text-gray-800">
                    {room?.floor}
                  </h3>

                </div>


                <div className="rounded-2xl sm:rounded-3xl bg-white/60 p-4">

                  <Users className="mb-2 text-[#84B179]" />

                  <p className="text-sm text-gray-500">
                    Capacity
                  </p>

                  <h3 className="font-bold text-gray-800">
                    {room?.capacity}
                  </h3>

                </div>


                <div className="rounded-2xl sm:rounded-3xl bg-white/60 p-4">

                  <Clock3 className="mb-2 text-[#84B179]" />

                  <p className="text-sm text-gray-500">
                    Hourly Rate
                  </p>

                  <h3 className="font-bold text-gray-800">
                    ${room?.hourlyRate}
                  </h3>

                </div>

              </div>


              <div className="mt-8">

                <h2 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                  Amenities
                </h2>

                <div className="flex flex-wrap gap-3">

                  <div
                    className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#84B179] text-white text-xs">
                      ✓
                    </div>
                    <span className="flex gap-3">{room?.amenities}</span>
                  </div>

                </div>

              </div>


              <div className="mt-8 w-full sm:w-fit">
                <OpenModal room={room} />
              </div>

            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 border-t border-white/30 pt-8">

            {featuredItems.map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-3
                  rounded-2xl border border-slate-200
                  bg-slate-100 px-4 py-3 sm:px-6
                  text-sm font-bold text-slate-900 sm:text-base
                  transition-all duration-300
                  hover:bg-white hover:shadow-lg
                "
              >

                {/* <item.icon className="h-5 w-5 text-blue-600" /> */}

                <span>{item.label}</span>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default RoomDetailsPage;