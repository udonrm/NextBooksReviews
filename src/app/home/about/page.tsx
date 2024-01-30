"use client";
import { Header } from "@/app/components/header";
import { UserInformation } from "@/app/components/userInformation";
import { SessionProvider } from "next-auth/react";

const About = ({ pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps?.session}>
        <Header />
        <UserInformation />
        <div className="flex justify-center items-center h-96">
          <p className="text-7xl font-sans ">Welcome to Bookers!</p>
        </div>
      </SessionProvider>
    </>
  );
};

export default About;
