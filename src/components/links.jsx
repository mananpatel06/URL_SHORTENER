"use client";
import { deleteUrl } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LinksCopy = ({ u }) => {
  const router = useRouter();
  return (
    
    <button
        className=" bg-red-500 rounded-lg p-1"
        onClick={() => deleteUrl(u._id)}
      >
        Delete
      </button> 
  );
};

export default LinksCopy;
