import Link from "next/link";

function HeaderButton() {
  return (
    <div className="hidden sm:flex gap-2">
      <button
        type="button"
        className="bg-teal-700 rounded-2xl py-2 w-20 text-white hover:bg-teal-600 transition"
      >
        Sign In
      </button>
      <button
        type="button"
        className="rounded-2xl outline-2 outline-black py-2 w-20 text-black hover:bg-white transition"
      >
        Sign up
      </button>
    </div>
  );
}

export default HeaderButton;
