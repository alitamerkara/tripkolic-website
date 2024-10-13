import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-auto border border-gray-200 mt-[16px] p-6 flex flex-col items-center">
      {/* container */}
      <div className="w-full max-w-[1140px] flex flex-col gap-[28px] p-[24px]">
        <div className="w-full flex md:flex-col items-center gap-4 md:flex-row md:justify-between md:items-start">
          <img
            src="/tripkolic.png"
            className="w-[140px] h-[35px] cursor-pointer"
          />
          <p className="text-xs text-center text-[#6D6D6D] max-w-[330px]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida elit
            diam hendrerit dapibus diam velit non habitant potenti?
          </p>
        </div>

        {/* footer menu */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-2">
            <p className="font-medium">About tripkolic</p>
            <Link href="/about">About Us</Link>
            <Link href="/news">News Room</Link>
            <Link href="/blog">tripkolic Blog</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-2">
            <p className="font-medium">Partnership</p>
            <Link href="/signup">Merchant sign up</Link>
            <Link href="/login">Merchant log in</Link>
            <Link href="/partnership">Affiliate Partnership</Link>
            <Link href="/influencer">Influencer Program</Link>
            <Link href="/market">Agent Marketplace</Link>
            <Link href="/partnerhub">tripkolic Partner Hub</Link>
            <Link href="/distribution">Distribution & Marketing Enquiries</Link>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-2">
            <p className="font-medium">Terms of use</p>
            <Link href="/terms">General terms of use</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/cookies">Cookie policy</Link>
            <Link href="/bounty">Bug Bounty Program</Link>
            <Link href="/animals">Animal Welfare Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
