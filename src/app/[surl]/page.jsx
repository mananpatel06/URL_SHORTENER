"use server"
import { getFullUrl } from '@/lib/action';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ShortId = async({params}) => {
    
        const { surl } = params;
        const url = await getFullUrl(surl);
        redirect(url.full);
 
  return (
    <div>Loading...</div>
  )
}

export default ShortId
