'use server'



export const fetchRooms = async(searchTerm = '') => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyrooms?search=${searchTerm }`,
    {cache: 'no-store'}
     
  )
  const data =await res.json();
  return data ;
};

export const editModal = async ( _id, booking) => {
try {
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyroomsEdit/${_id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(booking),
      });
     
      return res.json();
    } catch (error) {
      // console.log(error);
      // toast.error("Failed to update room");
    }
};

export const fetchSingleRooms = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/studyrooms/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
// console.log(res);
  if (!res.ok) {
    return null;
  }
  return res.json();
};


export const fetchFeaturedRooms = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`,{
    cache: 'no-store'
  })
  const data =await res.json();
  return data || [];
}