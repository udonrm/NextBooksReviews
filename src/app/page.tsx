"use client";
import { SessionProvider } from "next-auth/react";
import { Header } from "./components/header";
import { Auth } from "./components/auth";

export default function Home() {
  return (
    <>
      <SessionProvider>
        <Header />
        <Auth />
      </SessionProvider>
    </>
  );
}
