"use client";
import { deleteUrl, getAllUrl } from "@/lib/action";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataProvider";

const Table = () => {
  const { data, Loading, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  if (Loading) {
    return <div className="text-white text-2xl">Loading...</div>;
  }

  return (
    // <div className="flex flex-col items-center">
    //   {data?.map((u, i) => (
    //       <div
    //         key={i}
    //         className="text-white text-xl  m-2 gap-5 flex"
    //       >
    //         <div className="flex items-center gap-5 p-2 h-15 bg-neutral-800 rounded-lg max-sm:flex-col justify-center max-sm:w-[300px] max-sm:h-[300px] max-sm:overflow-auto ">
    //           <span className="flex overflow-x-hidden overflow-y-scrool justify-start cursor-pointer">
    //             <Link href={u.full} target="_blank">
    //               {u.full}
    //             </Link>
    //           </span>
    //           <span className=" w-[200px]  cursor-pointer text-blue-600" >
    //             <Link href={`/${u.short}`}>{u.short}</Link>
    //           </span>

    //           <span className=" w-[100px] h-auto " >
    //             {u ? u.clicks : "NA"}

    //           </span>

    //           <Link href={`/analytics/${i}`}>
    //           <button
    //             className={` w-fit rounded-lg p-2 bg-blue-700 active:ring-4 active:ring-blue-700 active:ring-offset-1`}
    //             >
    //             Analytics
    //           </button>
    //             </Link>

    //           <button
    //             className={`  rounded-lg p-2 bg-red-500 active:ring-4 active:ring-red-500 active:ring-offset-1`}
    //             onClick={() => {deleteUrl(u._id)&&fetchData()}}
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    // </div>

    <div className="max-lg:overflow-x-scroll">
      <table className=" table-auto divide-y-2 divide-gray-200 bg-neutral-800 text-md rounded-md">
        <thead className="ltr:text-left">
          <tr>
            <th className="break-words text-pretty w-10 px-4 py-2 font-medium text-white">
              URL
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
              Short Url
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
              Clicks
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
              Analytics
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
              Delete
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          {data?.map((u, i) => (
            <>
              <tr>
                <td className="break-words text-pretty w-10 px-4 py-2 font-medium text-blue-700 cursor-pointer">
                  <Link href={u.full} target="_blank">
                    {" "}
                    {u.full}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700 ">
                  <Link href={`/${u.short}`}>{u.short}</Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  {u.clicks}
                  </td>
                <td className="whitespace-nowrap px-4 py-2 text-white cursor-pointer">
                  <Link href={`/analytics/${i}`}>
                    <button
                      className={` rounded-lg p-2 bg-blue-700 active:ring-4 active:ring-blue-700 active:ring-offset-1`}
                    >
                      Analytics
                    </button>
                  </Link>
                </td>
               
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  <button
                    className={`rounded-lg p-2  bg-red-500 active:ring-4 active:ring-red-500 active:ring-offset-1`}
                    onClick={() => {
                      deleteUrl(u._id) && fetchData();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
