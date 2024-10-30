"use client";

import { navigation } from "@/constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "@/public/assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { crown, star } from "@/public/assets";

const Header = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <Image
            src="/assets/brainwave.svg"
            alt="BrainWave"
            width={190}
            height={40}
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 bottom-0 right-0 bg-n-8 border-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          {pathname !== "/generation" && (
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-1 text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
          <HamburgerMenu />
        </nav>

        <div className="flex">
          {pathname === "/generation" && (
            <div className="bg-n-14 my-5 hidden lg:flex mx-6 rounded-xl py-2.5 px-3 gap-2">
              <div className="bg-n-15 flex text-lg items-center justify-center text-center gap-1 px-3 py-1 font-bold rounded-xl">
                <span className="text-center">50</span>
                <Image src={star} width={15} height={15} alt="star" />
              </div>

              <button className="bg-[#3F1564] px-2 flex items-center justify-center gap-1 rounded-lg cursor-pointer hover:bg-[#30114b]">
                <Image src={crown} width={15} height={15} alt="crown" />
                <span className="text-[#AC6AFF] font-bold text-center">
                  Upgrade
                </span>
              </button>
            </div>
          )}

          <SignedIn afterSwitchSessionUrl="/generation">
            <UserButton  />
          </SignedIn>
        </div>

        <SignedOut>
          <a
            href="/sign-up"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New Account
          </a>

          <Button className="hidden lg:flex" href="/sign-in">
            Sign in
          </Button>
        </SignedOut>

        <Button
          className={`ml-auto lg:hidden ${
            pathname === "/generation" && "hidden"
          }`}
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
