'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
  const pathname = usePathname();

const isActive = href === pathname;
  return (
   <Link 
   href={href}
   className={`text-lg font-medium hover:text-[#84B179 ${isActive ? " border-b-2 border-b-text-[#84B179]" : ""}`}
   >
   {children}
   </Link>
  );
};

export default NavLink;