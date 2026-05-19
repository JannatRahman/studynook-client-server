import { fetchFeaturedRooms} from "@/lib/rooms/data";
import AvailableStudyRoomsCard from "./AvailableStudyRoomsCard";



const AvailableStudyRooms = async () => {
  const studyrooms = await fetchFeaturedRooms();

  

  return (
    <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      
      {/* Heading */}
      <div className="mb-10 text-center space-y-3">
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-gray-800
          "
        >
          Available Study Rooms
        </h2>

        <p
          className="
            mx-auto
            max-w-2xl
            text-sm
            sm:text-base
            text-gray-600
          "
        >
          Discover peaceful, modern, and fully equipped study spaces
          designed for focus, productivity, and collaboration.
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
          place-items-center
        "
      >
        {studyrooms?.map((rooms) => (
          <AvailableStudyRoomsCard
            key={studyrooms?._id}
            studyrooms={rooms}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableStudyRooms;