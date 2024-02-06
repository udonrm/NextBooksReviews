import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { UserCard } from "@/types";

const UserCard = ({ user, id }: UserCard) => {
  const { data: session } = useSession();
  return (
    <>
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
            {user?.id === session?.user?.userId ? (
              <Link href={`${id}/edit`}>
                <Button variant="link">Edit</Button>
              </Link>
            ) : (
              <div />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UserCard;
