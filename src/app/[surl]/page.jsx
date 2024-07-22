"use client";
import { getFullUrl } from "@/lib/action";
import { useParams, useRouter } from "next/navigation";
import {  useEffect, useState } from "react";

const ShortId = () => {

  const [url, setUrl] = useState(null);
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    const fetch = async () =>{
    const newData = await getFullUrl(params.surl)
    setUrl(JSON.parse(newData));
  }

    fetch();
  }, [])
  
  if (url === null) {    
    
    return <div className="w-full bg-neutral-800 h-screen flex flex-col items-center justify-center text-white text-6xl font-mono">Loading...</div>;
  }
  else{
    router.replace(url.full);
  }

  
};

export default ShortId;
