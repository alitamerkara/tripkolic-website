import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-full flex flex-col">
        <div className="mx-4 lg:mx-[70px] gap-6 lg:gap-[48px] h-auto lg:h-[596px] w-full lg:w-[1140px] flex flex-col lg:flex-row">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </div>
      <Footer />
      {/* rights */}
      <div className="w-full lg:w-[1280px] h-auto lg:h-[66px] p-4 lg:p-[24px] flex items-center justify-center">
        <p className="text-xs font-normal w-full lg:w-[1140px] text-center lg:text-left h-auto lg:h-[18px] text-[#6D6D6D] flex justify-center lg:justify-start">
          © 2024
          <span className="font-bold pl-1"> Tripkolic</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Layout;
