'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all  duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-[#E8F5BD] py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between ">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="transition-transform duration-300 hover:rotate-12"
            />
            <h3 className="font-black text-2xl">Study <span className="text-[#84B179]">Nook</span></h3>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 ml-20">
            <li><NavLink className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/">Home</NavLink></li>
            <li><NavLink className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/all-rooms">All Rooms</NavLink></li>
            <li><NavLink className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/add-rooms">Add Rooms</NavLink></li>
            <li><NavLink className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/my-listings">My Listings</NavLink></li>
            <li><NavLink className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/my-bookings">My Bookings</NavLink></li>
          </ul>
        </div>

        {/* RIGHT SIDE (FIXED RESPONSIVE LAYOUT) */}
        <div className="flex items-center gap-3">

          {/* AUTH BUTTONS (SHOW ON MD + LG + SM RIGHT SIDE) */}
          <div className="flex items-center gap-2 md:gap-3">

            <Link
              href="/signup"
              className="bg-[#84B179] px-3 md:px-4 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition text-sm md:text-base"
            >
              Login
            </Link>

            <Link
              href="/signin"
              className="border border-[#84B179] text-[#84B179] px-3 md:px-4 py-2 rounded-lg font-semibold hover:bg-[#84B179] hover:text-white transition text-sm md:text-base"
            >
              Logout
            </Link>
          </div>

          {/* PROFILE DROPDOWN (ALWAYS RIGHT SIDE) */}
          <div className="relative group">
            <button className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 transition">
              <Image
                width={40}
                height={40}
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Hide text on sm, show md+ */}
              <div className="text-left hidden md:block">
                <p className="text-sm font-bold">Amila</p>
                <p className="text-xs text-slate-500">Student</p>
              </div>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-14 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

              <div className="p-4 border-b">
                <p className="font-bold text-sm">Welcome back!</p>
              </div>

              <div className="flex flex-col p-2">
                <Link href="/profile" className="text-lg font-medium hover:text-[#84B179] transition-colors px-3 py-2 hover:bg-slate-100 rounded-lg ">Profile</Link>
                <Link href="/settings" className="text-lg font-medium hover:text-[#84B179] transition-colors px-3 py-2 hover:bg-slate-100 rounded-lg">Settings</Link>
                <Link href="/dashboard" className="text-lg font-medium hover:text-[#84B179] transition-colors px-3 py-2 hover:bg-slate-100 rounded-lg">Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[700px] py-4" : "max-h-0"
        }`}>
        <div className="px-4 border-t mt-4 pt-4">

          <ul className="flex flex-col gap-4">
            <li><Link className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/">Home</Link></li>
            <li><Link className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/all-rooms">All Rooms</Link></li>
            <li><Link className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/add-rooms">Add Rooms</Link></li>
            <li><Link className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/my-listings">My Listings</Link></li>
            <li><Link className="text-lg font-medium hover:text-[#84B179] transition-colors" href="/my-bookings">My Bookings</Link></li>
          </ul>

          {/* REMOVE DUPLICATE AUTH HERE (important fix) */}

          <div className="mt-6 border-t pt-4 flex items-center gap-3">
            <Image
              width={45}
              height={45}
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
              alt="avatar"
              className="w-11 h-11 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold">Amila</p>
              <p className="text-sm text-slate-500">Student</p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;