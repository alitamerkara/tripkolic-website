import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";

const Navbar = () => {
  const route = useRouter();
  const param = route.pathname;

  return (
    <nav className="h-[83px] pt-[16px] pb-[24px] border-b border-gray-200">
      <div className="flex items-center justify-between h-[43px] mx-[70px]">
        <img
          src="/tripkolic.png"
          className="w-[140px] h-[35px] cursor-pointer"
        />

        {/* Normal Menü */}
        <div className="hidden md:flex items-center w-[113px] py-[12px] gap-[32px]">
          <Link href="/">
            <p className={param === "/" ? "font-bold" : "font-normal"}>Home</p>
          </Link>
          <Link href="/tours">
            <p className={param === "/tours" ? "font-bold" : "font-normal"}>
              Tours
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <MdOutlineShoppingCart className="text-2xl mr-5 cursor-pointer" />
          <div className="flex items-center justify-center w-[70px] h-[42px] border border-gray-200 rounded-full">
            <IoMdMenu className="text-2xl cursor-pointer" />
            <HiMiniUserCircle className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Responsive Tasarım için Menü */}
      <div className="flex flex-col items-center md:hidden">
        <div className="flex gap-4">
          {" "}
          <Link href="/">
            <p className={param === "/" ? "font-bold" : "font-normal"}>Home</p>
          </Link>
          <Link href="/tours">
            <p className={param === "/tours" ? "font-bold" : "font-normal"}>
              Tours
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
