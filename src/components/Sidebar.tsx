import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar: React.FC = () => {
  const route = useRouter();
  const param = route.pathname;
  return (
    <div className="w-[329px] h-[532px] py-[32px] gap-[10px] flex flex-col justify-between mx-auto">
      {/* profile field */}
      <div className="w-full h-[234px] gap-[24px] p-[24px] border border-gray-200 flex flex-col justify-center items-center rounded-[12px]">
        {/* profile photo and name */}
        <div className="flex flex-col justify-center items-center w-[188px] h-[117px] gap-[10px]">
          <div className="w-[60px] h-[60px] rounded-full bg-gray-200 "></div>
          <div>
            <p className="text-base text-center font-medium cursor-pointer">
              Orca Travel Co.ltd
            </p>
            <p className="text-sm text-center font-medium cursor-pointer">
              Super Host
            </p>
          </div>
        </div>

        <div className="flex justify-between w-[281px] h-[45px]">
          <div className="flex flex-col">
            <p className="text-lg font-medium text-center cursor-pointer">
              4.80
            </p>
            <p className="text-xs text-center cursor-pointer">Rating</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-medium text-center cursor-pointer">
              100
            </p>
            <p className="text-xs text-center cursor-pointer">Reviews</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-medium text-center cursor-pointer">4</p>
            <p className="text-xs text-center cursor-pointer">Years hosting</p>
          </div>
        </div>
      </div>
      {/* side menu field */}
      <div className="w-full h-[288px] border border-gray-200 p-[24px] rounded-[12px]">
        <Link href="/personal">
          <p
            className={`font-semibold text-base w-full h-[48px] px-[24px] py-[12px] ${
              param === "/personal" ? "bg-amber-200 rounded-lg" : ""
            }`}
          >
            Personal
          </p>
        </Link>
        <Link href="/booking">
          <p
            className={`font-semibold text-base w-full h-[48px] px-[24px] py-[12px] ${
              param === "/booking" ? "bg-amber-200 rounded-lg" : ""
            }`}
          >
            Bookings
          </p>
        </Link>
        <Link href="/review">
          <p
            className={`font-semibold text-base w-full h-[48px] px-[24px] py-[12px] ${
              param === "/review" ? "bg-amber-200 rounded-lg" : ""
            }`}
          >
            Reviews
          </p>
        </Link>
        <Link href="/settings">
          <p
            className={`font-semibold text-base w-full h-[48px] px-[24px] py-[12px] ${
              param === "/settings" ? "bg-amber-200 rounded-lg" : ""
            }`}
          >
            Settings
          </p>
        </Link>
        <Link href="/notifications">
          <p
            className={`font-semibold text-base w-full h-[48px] px-[24px] py-[12px] ${
              param === "/notifications" ? "bg-amber-200 rounded-lg" : ""
            }`}
          >
            Notifications
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
