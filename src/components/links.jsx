"use client";
import { deleteUrl, getAllUrl } from "@/lib/action";
import React, { useEffect, useState } from "react";

const LinksCopy = ({ u,i }) => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState(u);
 
  useEffect(() => {
    const run = async ()=>{
      let url = await getAllUrl();
      setData(JSON.parse(url));
    }
    run();
  }, [click]);
  return (
    <>
    <span className=" w-[100px] h-auto " onClick={()=>setClick(!click)}>{data[i]?data[i].clicks:"NA"}</span>
    
    <button
        className=" bg-red-500 rounded-lg p-1"
        onClick={() => deleteUrl(data._id)}
        >
        Delete
      </button> 
        </>
  );
};

export default LinksCopy;
