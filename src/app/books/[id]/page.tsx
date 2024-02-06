"use client";
import { Header } from "@/app/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Book } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const deleteBook = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/book/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const BookDetail = () => {
  const { data: session } = useSession();

  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchSingleBook = async () => {
      const response = await fetch(`http://localhost:3000/api/book/${id}`);
      const data = await response.json();
      setBook(data.bookWithUserName);
    };
    fetchSingleBook();
  }, [id]);

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    router.push("/books");
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-96">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{book?.title}</CardTitle>
            <CardDescription>{book?.body}</CardDescription>
          </CardHeader>
          <CardContent className="grid w-full items-center gap-4">
            <div className="flex">
              Posted by&nbsp;
              <Link href={`/users/${book?.userId}`} className="hover:underline">
                {book?.userName}
              </Link>
            </div>
            {session?.user?.userId === book?.userId ? (
              <div className="flex justify-center">
                <Button
                  variant="link"
                  className="m-3"
                  onClick={() => {
                    handleDelete(book.id);
                  }}
                >
                  Delete
                </Button>
                <Link href={`${id}/edit`} className="m-3">
                  <Button variant="link">Edit</Button>
                </Link>
              </div>
            ) : (
              <div />
            )}
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/books">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default BookDetail;
