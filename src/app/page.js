import AvailableStudyRooms from "@/components/AvailableStudyRooms";
import Banner from "@/components/Banner";
import StudyRoomSection from "@/components/StudyRoomSection";
import WhyStudyNook from "@/components/WhyStudyNook";

export const metadata = {
  title: "StudyNook | Home",
  
};

export default function Home() {
  return (
   <div>
    <Banner/>
    <AvailableStudyRooms/>
    <StudyRoomSection/>
    <WhyStudyNook/>
   </div>
  );
}
