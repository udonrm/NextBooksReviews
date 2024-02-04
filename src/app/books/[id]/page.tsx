"use client";
import { SessionProvider } from "next-auth/react";
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

const BookDetail = () => {
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
      </SessionProvider>
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
          </CardContent>
        </Card>
      </div>
      <Link href="/books">
        <div className="flex justify-center items-center">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Back
          </button>
        </div>
      </Link>
    </>
  );
};

export default BookDetail;
