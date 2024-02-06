"use client";
import { Header } from "@/app/components/header";
import { useRouter, useParams } from "next/navigation";
import BookForm from "@/app/components/bookForm";
import { useEffect, useState } from "react";
import { Book } from "@/types";
import { useSession } from "next-auth/react";

const EditBook = () => {
  const router = useRouter();
  const { id } = useParams();
  const [book, setBook] = useState<Book>();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchSingleBook = async () => {
      const response = await fetch(`http://localhost:3000/api/book/${id}`);
      const data = await response.json();
      setBook(data.bookWithUserName);

      // 取得した本のデータをuseEffect内で直接使って比較
      if (session?.user?.userId !== data.bookWithUserName.userId) {
        router.push("/books");
      }
    };
    fetchSingleBook();
  }, [id, book?.userId, session?.user?.userId, router]);

  return (
    <>
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
    </>
  );
};

export default EditBook;
