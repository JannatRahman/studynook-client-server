export const fetchRooms = async(searchTerm = '') => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyrooms?search=${searchTerm }`,
    {cache: 'no-store'}
     
  )
  const data =await res.json();
  return data ;
};


export const fetchFeaturedRooms = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`,{
    cache: 'no-store'
  })
  const data =await res.json();
  return data || [];
}