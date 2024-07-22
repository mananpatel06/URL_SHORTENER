"use client";
import { deleteUrl, getAllUrl } from "@/lib/action";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataProvider";

const Table = () => {

  const {data,Loading,fetchData} = useContext(DataContext);

  useEffect(() => {
    fetchData();
  },[]) 


  if (Loading) {
    return(<div className="text-white text-2xl">Loading...</div>)
  }

  return (
    <div>
      {data?.map((u, i) => (
          <div
            key={i}
            className="text-white text-xl  m-2 text-pretty flex gap-5 "
          >
            <div className="flex items-center gap-5 p-2 h-15 bg-neutral-800 rounded-lg max-sm:flex-col max-sm:w-[300px] max-sm:h-[300px] max-sm:overflow-auto ">
              <span className="flex w-[500px] overflow-x-hidden overflow-y-scrool justify-start cursor-pointer">
                <Link href={u.full} target="_blank">
                  {u.full}
                </Link>
              </span>
              <span className=" w-[200px]  cursor-pointer text-blue-600" >
                <Link href={`/${u.short}`}>{u.short}</Link>
              </span>

              <span className=" w-[100px] h-auto " >
                {u ? u.clicks : "NA"}
                
              </span>

              <Link href={`/analytics/${i}`}>
              <button
                className={` w-full rounded-lg p-2 bg-blue-700 active:ring-4 active:ring-blue-700 active:ring-offset-1`}
                >
                Analytics
              </button>
                </Link> 

              <button
                className={`  rounded-lg p-2 bg-red-500 active:ring-4 active:ring-red-500 active:ring-offset-1`}
                onClick={() => {deleteUrl(u._id)&&fetchData()}}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Table;
