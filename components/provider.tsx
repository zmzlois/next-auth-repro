import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const SessionProvider = async ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  if (session) {
    return <>{children}</>;
  }
};
