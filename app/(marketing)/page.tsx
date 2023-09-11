import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      Homepage - <Link href="/get-things-done">Dashboard</Link>
    </div>
  );
}
