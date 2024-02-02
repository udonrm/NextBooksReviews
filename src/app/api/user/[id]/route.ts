import { NextResponse } from "next/server";
import { main } from "../route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("user/")[1];
    await main();
    const user = await prisma.user.findFirst({
      where: { id },
      include: {
        books: true,
      },
    });

    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
