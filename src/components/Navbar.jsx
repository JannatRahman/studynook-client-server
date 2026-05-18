
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg items-center">Study Nook</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Rooms</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Add Rooms</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Listings</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Bookings</Link>
          </li>
        </ul>

        <div className="flex gap-4">
         
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link  href={"/signup"}>Login</Link>
              </li>
              <li>
                <Link href={"/signin"}>Logout</Link>
              </li>
            </ul>
          

          
           
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;