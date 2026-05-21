import Image from 'next/image';
import { Button, Chip } from '@heroui/react';
import Link from 'next/link';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import CancelBookingButton from '@/components/CancelBookingButton';

export default async function MyBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] px-4">
        <div className="bg-white/70 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl p-8 text-center max-w-md w-full">
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
    headers: await headers()
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${session.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: 'no-store'
    }
  );

  const booking = await res.json();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
      
    
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
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
              <Button
                color="success"
                radius="full"
                className="px-8 font-semibold"
              >
                Browse Rooms
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {booking?.map((item) => (
              <div
                key={item?._id}
                className="group bg-white/55 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item?.image}
                    alt="room"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

               
                <div className="p-5 flex flex-col gap-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 line-clamp-1">
                      {item?.name}
                    </h3>

                    <p className="text-sm text-slate-500 mt-2">
                      Booked on{' '}
                      {new Date(item?.bookedAt).toDateString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <Chip
                      color="success"
                      variant="flat"
                      size="sm"
                      className="font-semibold"
                    >
                      Active
                    </Chip>

                    <CancelBookingButton bookingId={item?._id} />
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