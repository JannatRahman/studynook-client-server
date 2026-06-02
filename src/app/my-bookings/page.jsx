import Image from 'next/image';
import { Button, Chip } from '@heroui/react';
import Link from 'next/link';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
  title: "StudyNook-Bookings",
  
};


export default async function MyBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
// console.log(session?.user);
  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] px-4">
        <div className="bg-white/70 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl p-8 text-center max-w-md w-full ">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            User not logged in
          </h2>

          <p className="text-slate-600 mb-6">
            Please login to view your bookings.
          </p>

          <Link href="/login">
            <Button color="success" radius="full">
              Login Now
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${session.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const booking = await res.json();
  // console.log(booking);


  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-10 ">

      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

    
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
            My Bookings
          </h1>

          <p className="mt-3 text-slate-700 text-sm sm:text-base">
            Manage all your booked rooms easily.
          </p>
        </div>

      
        {booking?.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              No bookings yet
            </h2>

            <p className="text-slate-600 mb-6">
              Browse rooms and book your perfect stay.
            </p>

            <Link href="/all-rooms">
              <Button color="success" radius="full" className="px-8 font-semibold">
                Browse Rooms
              </Button>
            </Link>
          </div>
        ) : (
         
          <div className="space-y-6 ">
            {booking?.map((item) => (
              <div
                key={item?._id}
                className="flex flex-col md:flex-row bg-white/55 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate__animated animate__slideInRight"
              >
              
                <div className="relative w-full md:w-72 h-48 sm:h-56 md:h-auto">
                  <Image
                    src={
                      item?.image ||
                      'https://images.unsplash.com/photo-1497366754035-f200968a6e72'
                    }
                    alt={item?.title || 'room'}
                    fill
                    className="object-cover"
                  />
                </div>

          
                <div className="flex-1 p-5 flex flex-col justify-between gap-4">

                
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 line-clamp-1">
                      {item?.roomTitle}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Booked on {new Date(item?.bookedAt).toDateString()}
                    </p>
                  </div>

               
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <Chip color="success" variant="flat" size="sm">
                      Active
                    </Chip>

                    <div className="text-slate-700 font-semibold">
                       ${item?.totalCost}/hr
                    </div>
                  </div>

                
                  <div className="flex justify-end">
                  Cancel
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}