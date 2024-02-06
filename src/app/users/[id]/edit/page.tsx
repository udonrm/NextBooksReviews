"use client";
import { Header } from "@/app/components/header";
import UserForm from "@/app/components/userForm";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";

const EditUser = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data: session } = useSession();
  session?.user?.userId !== id ? router.push("/users") : <div />;

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <UserForm />
      </div>
    </>
  );
};

export default EditUser;
