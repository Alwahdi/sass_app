import Image from "next/image";
import Link from "next/link";
import Navitems from "./Navitems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cusror-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <Navitems />
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
