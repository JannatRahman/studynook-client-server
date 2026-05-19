import AvailableStudyRoomsCard from "./AvailableStudyRoomsCard";

const fetchRooms = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studyrooms`)
  const data =await res.json();
  return data || [];
}

const AvailableStudyRooms =async () => {
  const studyrooms = await fetchRooms();

  const rooms = [...studyrooms].slice(0, 6);
  return (
    <div>
      <h2>Available Study Rooms</h2>
      <div className="grid grid-cols-3 gap-4">
        {
          rooms?.map((rooms) => <AvailableStudyRoomsCard
          key={rooms?._id}
          />)
        }
      </div>
    </div>
  );
};

export default AvailableStudyRooms;