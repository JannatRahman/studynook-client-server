'use server'

import { headers } from "next/headers";
import { auth } from "../auth";

export const fetchRooms = async(searchTerm = '') => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyrooms?search=${searchTerm }`,
    {cache: 'no-store'}
     
  )
  const data =await res.json();
  return data ;
};

export const editModal = async ( _id, booking) => {
  const { token } = await auth.api.getToken({
      headers: await headers(),
    });
try {
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyroomsEdit/${_id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" ,
          authorization: `Bearer ${token}`
        },

        body: JSON.stringify(booking),


      });
     
      return res.json();
    } catch (error) {
      // console.log(error);
      // toast.error("Failed to update room");
    }
};

export const fetchSingleRooms = async (id) => {
  // const { token } = await auth.api.getToken({
  //     headers: await headers(),
  //   });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/studyrooms/${id}`,
    {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
};


export const fetchFeaturedRooms = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`,{
    cache: 'no-store'
  })

  return  res.json();  
}