import Link from "next/link";
import logo from "../../public/assets/logo.jpg";
import Image from "next/image";
import { Button } from "../ui/button";

const NavBar = () => {

  return (
    <>
      <header className="bg-slate-100 w-full border-b">
        <div className="wrapper flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <Image src={logo} width={80} height={80} alt="GoLearn" />
          </Link>
          <Button className="bg-indigo-600 rounded-full" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
