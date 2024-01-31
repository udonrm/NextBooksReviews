"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IndexProps } from "@/types";

export const Index = ({ endPointUrl, object, columns }: IndexProps) => {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    const fetchAlTargets = async () => {
      const res = await fetch(endPointUrl, {
        cache: "no-store",
      });
      const data = await res.json();
      //ブラケット記法にして変数の参照に対応する
      setTargets(data[object]);
    };
    fetchAlTargets();
  }, [endPointUrl, object]);

  return (
    <>
      <Table>
        <TableCaption>{object} List</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className="w-[100px]">
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {targets?.map((target) => (
            <TableRow key={target.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.key === "image" ? (
                    <Avatar>
                      <AvatarImage src={target[column.key]} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  ) : (
                    target[column.key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
