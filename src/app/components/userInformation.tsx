import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserInformation = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{session?.user?.name}</CardTitle>
          <CardDescription>{session?.user?.introduction}</CardDescription>
        </CardHeader>
        <CardContent className="grid w-full items-center gap-4">
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>
    </>
  );
};
