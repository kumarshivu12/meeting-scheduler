import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center p-6 shadow-sm">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="w-[150px] md:w-[200px] cursor-pointer"
        />
        <ul className="text-lg font-medium hidden md:flex gap-14">
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Product
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Contact us
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            About Us
          </li>
        </ul>
        <div className="flex gap-5">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
