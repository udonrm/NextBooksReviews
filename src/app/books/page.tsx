"use client";
import { Header } from "@/app/components/header";
import { UserInformation } from "@/app/components/userInformation";
import { Index } from "../components";
import { SessionProvider } from "next-auth/react";
import BookForm from "../components/bookForm";

const BookIndex = () => {
  return (
    <>
      <SessionProvider>
        <Header />
        <UserInformation />
        <div className="m-5 flex justify-center">
          <BookForm />
        </div>
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
