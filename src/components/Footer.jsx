import { Contact, LucideGalleryThumbnails } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin, LiaLinkSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#84B179]">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 "></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 "></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="transition-transform duration-300 hover:rotate-12"
            />
            <h3 className="font-black text-2xl">Study <span className="text-white">Nook</span></h3>
          </Link>

            <p className="text-sm text-black leading-relaxed">
              StudyNook is a full‑stack web application where students and library users can list study rooms they control (e.g., private rooms in a university library), and any registered user can browse, search, filter, and book those rooms for a specific date and time slot.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-black mb-4 flex items-center gap-1">
              <LiaLinkSolid className="text-xl"/> Links
            </h3>
            <ul className="space-y-2">
           
            <li><Link className=" font-sm text-black hover:text-white transition-colors" href="/all-rooms">All Rooms</Link></li>
            <li><Link className=" font-sm text-black hover:text-white transition-colors" href="/add-rooms">Add Rooms</Link></li>
            <li><Link className=" font-sm text-black hover:text-white transition-colors" href="/my-listings">My Listings</Link></li>
            <li><Link className=" font-sm text-black hover:text-white transition-colors" href="/my-bookings">My Bookings</Link></li>
          </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold text-black mb-4 flex gap-2 items-center">
              <Contact/> Contact information
            </h3>
            <ul className="space-y-3 text-sm text-black">
              <li>
                <Link href="#" className="">
                  <FaFacebook className="text-xl "/>
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition">
                  <BsInstagram className="text-xl "/>
                </Link>
              </li>
              <li>
                <Link href="#" className=" transition">
                  <LiaLinkedin className="text-2xl"/>
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-sm font-bold text-black mb-4 flex items-center gap-1">
               <LucideGalleryThumbnails/> Legal
            </h3>
            <ul className="space-y-3 text-sm text-black">
              <li>
                
                  About Us
              
              </li>
              <li>
               
                  Terms & Conditions
                
              </li>
              <li>
                
                  Privacy Policy
               
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/50"></div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3">

          <p>
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>

          <div className="flex gap-6">
            
              Privacy
           
            
              Terms
            
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;