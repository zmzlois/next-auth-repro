import Image from "next/image";
import { signIn } from "@/auth";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="flex flex-col items-center justify-center">
        {" "}
        <a href="/login" className="px-4 py-2 border rounded-lg">
          Log In
        </a>
      </div>
    </main>
  );
}
