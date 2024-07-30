"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`${
        isActive ? "font-medium text-primary-500" : "hover:text-primary-500"
      } transition-all font-normal`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
