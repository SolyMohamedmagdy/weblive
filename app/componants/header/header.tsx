import Link from "next/link";
import Navbar from "../navbar/navbar";
import Logo from "../logo/logo";
import HeaderButton from "../button/button";
import MobileButtonHeader from "../button/mobilebutton";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <MobileButtonHeader />
      <HeaderButton />
    </div>
  );
};

export default Header;
