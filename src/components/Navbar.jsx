'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-2" : "bg-slate-50 py-4"
      }`}>

    <div className="border-b px-2">
      <div className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="  group-hover:rotate-12 transition-transform"
          />
          <h3 className="font-black text-lg items-center">Study Nook</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link className="text-lg font-medium  hover:text-[#84B179] transition-colors" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="text-lg font-medium  hover:text-[#84B179] transition-colors" href={"/all-rooms"}>All Rooms</Link>
          </li>
          <li>
            <Link className="text-lg font-medium  hover:text-[#84B179] transition-colors" href={"/add-rooms"}>Add Rooms</Link>
          </li>
          <li>
            <Link className="text-lg font-medium  hover:text-[#84B179] transition-colors" href={"/my-listings"}>My Listings</Link>
          </li>
          <li>
            <Link className="text-lg font-medium  hover:text-[#84B179] transition-colors" href={"/my-bookings"}>My Bookings</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <> 
         
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link className="bg-[#A2CB8B] px-3 py-2 font-semibold text-white"  href={"/signup"}>Login</Link>
              </li>
              <li>
                <Link className="bg-[#A2CB8B] px-3 py-2 font-semibold text-white" href={"/signin"}>Logout</Link>
              </li>
            </ul>
            </> 
             <div className="relative group">
                  <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                    <Image
                      width={40}
                      height={40}
                      src={ "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                    />
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-bold truncate max-w-25">Amila</p>
                      <p className="text-[10px] text-slate-500">Student</p>
                    </div>
                  </button>
                  <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="font-bold text-sm">Welcome back!</p>
                      
                    </div>
            
          
        </div>
      </nav>
    </div>
    </nav>
  );
};

        
export default Navbar;