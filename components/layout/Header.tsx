import React from "react";
import siteLogo from "@/public/media/site/Logo.webp";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-[64px] lg:my-[32px] lg:mx-[128px]">
      <div className="shrink-0">
        <Link href={"/"}>
          <Image className="w-[140px] shrink-0" src={siteLogo} alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:block shrink-0">
        <Menu />
      </div>
      <div className="hidden lg:block shrink-0">
        <Searchbar />
      </div>
      <div className="hidden lg:block shrink-0">
        <Cart />
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <RiMenu3Fill size={27} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex flex-col gap-4 mb-5 items-center">
                <Cart />
                <Searchbar />
              </div>
            </SheetHeader>
            <Menu />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
