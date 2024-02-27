"use server"
import { deleteUrl, getAllUrl } from '@/lib/action';
import React from 'react'
import LinksCopy from './links';

const Table = async() => {

  let urls = await getAllUrl();
  
  return (
    <div>
      {urls.map((u, i) => (
          <div
            key={i}
            className="text-white text-xl  m-2 text-pretty flex gap-5 "
          >
            <LinksCopy u={JSON.parse(JSON.stringify(u))}/>
          </div>
        ))}
    </div>
  )
}

export default Table