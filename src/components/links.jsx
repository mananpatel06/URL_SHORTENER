"use client";
import { deleteUrl } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LinksCopy = ({ u }) => {
  const router = useRouter();
  return (
    <div className="flex gap-5 p-2 h-15 bg-neutral-700 rounded-lg max-sm:flex-col max-sm:w-[300px] max-sm:h-[200px] max-sm:overflow-auto ">
      <span className="flex w-[500px] overflow-x-hidden overflow-y-scrool justify-start cursor-pointer">
        <Link href={u.full} target="_blank">
          {u.full}
        </Link>
      </span>
      <span
        className=" w-[200px]  cursor-pointer"
        onClick={() => router.push(u.short)}
      >
        {u.short}
      </span>
      <span className=" w-[100px] ">{u.clicks}</span>
      <button
        className=" bg-red-500 rounded-lg p-1"
        onClick={() => deleteUrl(u._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default LinksCopy;
