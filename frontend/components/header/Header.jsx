import Image from "next/image";
import Link from "next/link";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container md:max-auto flex justify-between items-center ">
        <Link href="/">
          <Image
            src="/logo.png"
            height={25}
            width={120}
            className="w-36 h-full"
            alt="site-logo"
          />
        </Link>

        <Navigation />
      </div>
    </header>
  );
};
export default Header;
