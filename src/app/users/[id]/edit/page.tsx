"use client";
import { Header } from "@/app/components/header";
import UserForm from "@/app/components/userForm";
import { SessionProvider } from "next-auth/react";

const EditUser = () => {
  return (
    <>
      <SessionProvider>
        <Header />
        <div className="flex justify-center">
          <UserForm />
        </div>
      </SessionProvider>
    </>
  );
};

export default EditUser;
