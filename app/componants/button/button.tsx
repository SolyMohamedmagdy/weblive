import Link from "next/link";

function HeaderButton() {
  return (
    <div className="hidden sm:flex gap-2">
      <Link href="/login">
        {" "}
        <button
          type="button"
          className="bg-teal-700 rounded-2xl py-2 w-20 text-white hover:cursor-pointer hover:bg-teal-600 transition"
        >
          Login
        </button>{" "}
      </Link>
      <Link href="/signup">
        {" "}
        <button
          type="button"
          className="rounded-2xl outline-2 outline-black py-2 w-20 text-black hover:cursor-pointer hover:bg-white transition"
        >
          Sign up
        </button>
      </Link>
    </div>
  );
}

export default HeaderButton;
