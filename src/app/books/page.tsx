"use client";
import { Header } from "@/app/components/header";
import { UserInformation } from "@/app/components/userInformation";
import { Index } from "../components";
import BookForm from "../components/bookForm";

const BookIndex = () => {
  return (
    <>
      <Header />
      <UserInformation />
      <div className="m-5 flex justify-center">
        <BookForm
          endPointUrl={`http://localhost:3000/api/book`}
          method={"POST"}
          defaultValues={{
            title: "",
            body: "",
            userId: "",
          }}
        />
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
    </>
  );
};

export default BookIndex;
