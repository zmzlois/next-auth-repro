import { signIn } from "@/auth";

export const SignInButton = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <form
        action={async () => {
          "use server";
          await signIn("twitter");
        }}
      >
        {" "}
        <button
          type="submit"
          className="flex gap-2 rounded-full border p-2 md:p-6"
        >
          Sign in with Twitter
        </button>
      </form>
    </div>
  );
};
