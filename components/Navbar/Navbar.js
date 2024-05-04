import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center bg-gray-600 py-4">
      <nav className="text-white">
        <Link href="/" className="mx-12">
          Home
        </Link>
        <Link href="/blog" className="mx-12">
          Blog
        </Link>
        <Link href="/users" className="mx-12">
          Users
        </Link>
      </nav>
    </div>
  );
}
