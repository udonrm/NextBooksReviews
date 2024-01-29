import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginButton, LogoutButton } from "./button";

export const Auth = () => {
  return (
    <>
      <div className="flex items-center justify-center h-96">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>with your GitHub Account</CardDescription>
          </CardHeader>
          <CardContent className="grid w-full items-center gap-4">
            <LoginButton />
            <LogoutButton />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
