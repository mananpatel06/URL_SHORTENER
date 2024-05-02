import { deleteUrl, getAllUrl } from '@/lib/action';
import LinksCopy from './links';
import Link from 'next/link';

const Table = async () => {

  
  let url = JSON.parse(await getAllUrl());
  
  return (
    <div>
      {url && url.map((u, i) => (
          <div
            key={i}
            className="text-white text-xl  m-2 text-pretty flex gap-5 "
          >
            <div className="flex gap-5 p-2 h-15 bg-neutral-700 rounded-lg max-sm:flex-col max-sm:w-[300px] max-sm:h-[200px] max-sm:overflow-auto ">
      <span className="flex w-[500px] overflow-x-hidden overflow-y-scrool justify-start cursor-pointer">
        <Link href={u.full} target="_blank">
          {u.full}
        </Link>
      </span>
      <span
        className=" w-[200px]  cursor-pointer"
      >
        <Link href={`/${u.short}`}>
        {u.short}
        </Link>
      </span>
      {/* <span className=" w-[100px] ">{u.clicks}</span> */}
      <LinksCopy u={JSON.parse(JSON.stringify(u))} i={i} />
    </div>
          </div>
        ))}
    </div>
  )
}

export default Table