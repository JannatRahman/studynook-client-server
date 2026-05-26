import MyListingCard from "@/components/MyListingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";


const MyListings = async () => {
  const session = await auth.api.getSession({
      headers: await headers(),
    });
 const { token } = await auth.api.getToken({
    headers: await headers(),
  });
console.log(session);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mystudyrooms/${session.user.id}`,
     {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          cache: 'no-store',
        }
   
  );
  const listings = await res.json();
  console.log(listings);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-10 bg-gray-50">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        My Listings
      </h1>

      {listings?.length === 0 ? (
        <p className="text-gray-500">No listings found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings?.map((room) => (
            <MyListingCard key={room?._id} room={room} />
          ))}
        </div>
      )}

    </div>
  );
};

export default MyListings;