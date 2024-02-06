"use client";
import { Header } from "@/app/components/header";
import { UserInformation } from "@/app/components/userInformation";
import { Index } from "../components";

const UserIndex = () => {
  return (
    <>
      <Header />
      <UserInformation />
      <Index
        endPointUrl={`http://localhost:3000/api/user`}
        object={"users"}
        columns={[
          { key: "image", label: "Image" },
          { key: "name", label: "Name" },
          { key: "introduction", label: "Introduction" },
        ]}
      />
    </>
  );
};

export default UserIndex;
