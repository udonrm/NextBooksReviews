"use client";
import { Header } from "@/app/components/header";
import { UserInformation } from "@/app/components/userInformation";
import { SessionProvider } from "next-auth/react";
import { Index } from "../components";

const About = ({ pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps?.session}>
        <Header />
        <UserInformation />
        <Index
          endPointUrl={`http://localhost:3000/api/user`}
          object={"users"}
          columns={[
            { key: "image", label: "Image" },
            { key: "name", label: "Name" },
            { key: "introduction", label: "Introduction" },
          ]}
        />
      </SessionProvider>
    </>
  );
};

export default About;
