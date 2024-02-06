"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/app/components/header";
import { Book, User } from "@/types";
import { Index } from "@/app/components";
import UserCard from "@/app/components/userCard";

const UserDetail = () => {
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
      <Header />
      <UserCard user={user} id={id} />
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
    </>
  );
};

export default UserDetail;
