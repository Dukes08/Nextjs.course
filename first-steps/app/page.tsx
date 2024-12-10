import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="text-7xl">
        Hola Mundo
      </div>

      <Link href={'/about'}>About Page</Link>
    </main>

  );
}
