import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden sm:flex py-5 px-5 justify-center items-center">
      <Link href="/" className="link p-4">
        Home
      </Link>
      <Link href="/courses" className="link p-4">
        Courses
      </Link>
      <Link href="/about" className="link p-4">
        About
      </Link>
    </div>
  );
};

export default Navbar;
