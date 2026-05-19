
const fetchRooms = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyrooms`)
  const data =await res.json();
  return data || [];
}

const AllRoomsPage =async () => {
  const studyrooms = await fetchRooms();
  console.log(studyrooms);


  return (
    <div>
      <h2>All Rooms</h2>
      <div>
        {
          studyrooms?.map((rooms) => <div key={rooms?._id}>
          <p>{rooms?.name}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default AllRoomsPage;