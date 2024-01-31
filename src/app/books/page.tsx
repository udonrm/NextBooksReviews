"use client";
import { Header } from "@/app/components/header";
import { UserInformation } from "@/app/components/userInformation";
import { SessionProvider } from "next-auth/react";
import { Index } from "../components";

const BookIndex = ({ pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps?.session}>
        <Header />
        <UserInformation />
        <Index
          endPointUrl={`http://localhost:3000/api/book`}
          object={"books"}
          columns={[
            { key: "userName", label: "user" },
            { key: "title", label: "Title" },
            { key: "body", label: "Body" },
          ]}
        />
      </SessionProvider>
    </>
  );
};

export default BookIndex;
