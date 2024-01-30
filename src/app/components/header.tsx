"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session, status } = useSession();
  console.log(session?.user);

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
              <Link href="/">
                <Button variant="link">Home</Button>
              </Link>
              {!session ? (
                <>
                  <Link href="/home/about">
                    <Button variant="link">About</Button>
                  </Link>
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
                </>
              ) : (
                <>
                  <Link href="/users">
                    <Button variant="link">Users</Button>
                  </Link>
                  <Link href="/Books">
                    <Button variant="link">Books</Button>
                  </Link>
                  <Button onClick={() => signOut()} variant="link">
                    Log out
                  </Button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
