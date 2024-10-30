import Link from 'next/link';
export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-3">
      <Link href="/sign-in" className="border rounded-md p-2">
        Sign In
      </Link>
      <Link href="/sign-up" className="border rounded-md p-2">
        Sign Up
      </Link>
    </div>
  );
}
