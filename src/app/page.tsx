import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { Header } from "./components/header";
import { Auth } from "./components/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Header />
      <Auth />
    </>
  );
}
