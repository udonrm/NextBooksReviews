import { Session } from "@prisma/client";

export type ColumnConfig = {
  key: string;
  label: string;
};

export type User = {
  id: string;
  name: string | null;
  introduction: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
};

export type Book = {
  id: number;
  title: string;
  body: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  userName: string | null;
};

export type IndexProps = {
  endPointUrl: string;
  object: string;
  columns: ColumnConfig[];
  books?: Book[];
};

export type TargetData = Book[] | User[];

export type defaultValues = {
  title: string;
  body: string;
  userId: string;
};

export type BookForm = {
  endPointUrl: string;
  method: string;
  defaultValues: defaultValues;
};

export type UserCard = {
  user: User;
  id: string;
};
