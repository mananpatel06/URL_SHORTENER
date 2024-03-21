"use client"
import { addUrl } from '@/lib/action';
import React, { useEffect, useState } from 'react'

const Form = () => {

    const [input, setInput] = useState('');
    const [click, setclick] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setInput('');
        setclick(false);
      }, 500);
    }, [click])
    

  return (
    <form action={addUrl} className=" flex gap-3">
        <input
          name="myInput"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Enter Url.."
          className=" border-2 p-1 rounded-xl focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className=" bg-blue-700 text-white rounded-xl p-2"
          onClick={()=>setclick(!click)}
        >
          Shrink
        </button>
      </form>
  )
}

export default Form