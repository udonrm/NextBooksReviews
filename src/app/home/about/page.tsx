"use client";
import { Header } from "@/app/components/header";
import { SessionProvider } from "next-auth/react";

const About = ({ pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps?.session}>
        <Header />
        <div className="flex justify-center items-center h-96">
          <p className="text-7xl font-sans ">Welcome to Bookers!</p>
        </div>
      </SessionProvider>
    </>
  );
};

export default About;
