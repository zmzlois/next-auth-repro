import Image from "next/image";
import { signIn } from "@/auth";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className="text-2xl font-bold">Sign in</h1>
        <form
          action={async () => {
            "use server";
            await signIn("twitter");
          }}
        >
          {" "}
          <button type="submit" className="flex gap-2 rounded-full p-2 md:p-6">
            Sign in with Twitter
          </button>
        </form>
      </div>
    </main>
  );
}
