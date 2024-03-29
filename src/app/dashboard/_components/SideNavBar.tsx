"use client";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MENU_ITEMS } from "@/constants/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function SideNavBar() {
  const path = usePathname();
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    path && setActivePath(path);
  }, [path]);
  return (
    <div className="p-6 py-12">
      <div className="flex justify-center">
        <Image src={logo} width={150} height={150} alt="logo" />
      </div>
      <Link href={"/create-meeting"}>
        <Button className="flex gap-2 w-full mt-7 rounded-full">
          {" "}
          <Plus /> Create
        </Button>
      </Link>
      <div className="flex flex-col gap-6 mt-6">
        {MENU_ITEMS.map((item, index) => (
          <Link href={item.path} key={index}>
            <Button
              variant="ghost"
              className={`text-lg font-normal w-full flex justify-start gap-2 hover:bg-blue-100  ${
                activePath == item.path && "text-primary bg-blue-100"
              }`}
            >
              <item.icon /> {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNavBar;
