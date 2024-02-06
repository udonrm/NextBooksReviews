"use client";
import { SessionProvider } from "next-auth/react";
import { Header } from "@/app/components/header";
import { useParams } from "next/navigation";
import BookForm from "@/app/components/bookForm";
import { useEffect, useState } from "react";
import { Book } from "@/types";

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchSingleBook = async () => {
      const response = await fetch(`http://localhost:3000/api/book/${id}`);
      const data = await response.json();
      setBook(data.bookWithUserName);
    };
    fetchSingleBook();
  }, [id]);

  return (
    <>
      <SessionProvider>
        <Header />
        <div className="flex justify-center">
          <BookForm
            key={book?.id}
            endPointUrl={`http://localhost:3000/api/book/${id}`}
            method={"PATCH"}
            defaultValues={{
              title: book?.title || "",
              body: book?.body || "",
              userId: "",
            }}
          />
        </div>
      </SessionProvider>
    </>
  );
};

export default EditBook;
