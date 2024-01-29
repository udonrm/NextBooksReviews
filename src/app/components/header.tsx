"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Bookers
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              {!session ? (
                <Button
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: `${window.location.origin}`,
                    })
                  }
                  variant="link"
                >
                  Log in
                </Button>
              ) : (
                <Button onClick={() => signOut()} variant="link">
                  Log out
                </Button>
              )}
              <Button variant="link">About</Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
