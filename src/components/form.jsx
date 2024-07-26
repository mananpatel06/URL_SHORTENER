"use client"
import { DataContext } from '@/context/DataProvider';
import { addUrl } from '@/lib/action';
import React, { useContext, useEffect, useState } from 'react'

const Form = () => {

    const [input, setInput] = useState('');
    const [click, setclick] = useState(false);
    const {data,Loading,fetchData} = useContext(DataContext);


    useEffect(() => {
      setTimeout(() => {
        setInput('');
        setclick(false);
        fetchData();
      }, 500);
    }, [click])


  return (
    <form action={addUrl} className="lg:flex-row gap-3 max-w-screen flex flex-col ">
        <input
          name="myInput"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Enter Url.."
          className=" border-2 p-1 rounded-xl focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className=" bg-blue-700 text-white rounded-xl p-2 active:bg-blue-800 active:ring-4 active:ring-blue-800 active:ring-offset-1"
          onClick={()=>{setclick(true);}}
        >
          Shrink
        </button>
      </form>
  )
}

export default Form