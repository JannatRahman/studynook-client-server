import RoomsContainer from "@/components/RoomsContainer";

const AllRoomsPage = async ({ searchParams }) => {
   const params = await searchParams;

  
  return (
    <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-24">

      <div className="mb-10 text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          All Rooms
        </h2>

        <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-600">
          Discover peaceful, modern, and fully equipped study spaces
        </p>
      </div>

      <RoomsContainer params={params} />

    </section>
  );
};

export default AllRoomsPage;