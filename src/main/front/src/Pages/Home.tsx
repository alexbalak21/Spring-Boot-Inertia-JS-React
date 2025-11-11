import { Link, usePage } from "@inertiajs/react";

export default function Home() {
  const { props } = usePage();
  return (
    <div>
      <h1>Home</h1>
      <p>{(props as any).message ?? "Hello"}</p>
      <Link href="/about">About</Link>
    </div>
  );
}