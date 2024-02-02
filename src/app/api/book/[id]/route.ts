import { NextResponse } from "next/server";
import { main } from "../route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("book/")[1]);
    await main();
    const book = await prisma.book.findFirst({
      where: { id },
    });
    const bookCreateUser = await prisma.user.findFirst({
      where: {
        id: book?.userId,
      },
    });
    const bookWithUserName = {
      ...book,
      userName: bookCreateUser?.name,
    };
    return NextResponse.json(
      { message: "Success", bookWithUserName },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
