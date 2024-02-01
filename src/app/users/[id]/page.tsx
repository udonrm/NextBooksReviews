"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SessionProvider } from "next-auth/react";
import { Header } from "@/app/components/header";
import { Book, User } from "@/types";
import { Index } from "@/app/components";

const UserDetail = ({ pageProps }) => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    const fetchSingleUser = async () => {
      const response = await fetch(`http://localhost:3000/api/user/${id}`);
      const data = await response.json();
      setUser(data.user);

      // ユーザーの各本に対してユーザーネームを追加
      const booksWithUserName = data.user.books.map((book: Book) => ({
        ...book,
        userName: data.user.name,
      }));
      setBooks(booksWithUserName);
    };
    fetchSingleUser();
  }, [id]);

  return (
    <>
      <SessionProvider session={pageProps?.session}>
        <Header />
        <div className="flex justify-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>{user?.name}</CardTitle>
              <CardDescription>{user?.introduction}</CardDescription>
            </CardHeader>
            <CardContent className="grid w-full items-center gap-4">
              <Avatar>
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
        </div>
        <Index
          endPointUrl={`http://localhost:3000/api/user/${id}`}
          object={"books"}
          columns={[
            { key: "userName", label: "user" },
            { key: "title", label: "Title" },
            { key: "body", label: "Body" },
          ]}
          books={books}
        />
      </SessionProvider>
    </>
  );
};

export default UserDetail;
