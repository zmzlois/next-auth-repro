import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen items-center justify-center flex">
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
