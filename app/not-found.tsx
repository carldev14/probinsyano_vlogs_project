// pages/404.js

import smallfontFace from '@/utils/smallfontface';
import { NoSymbolIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main className='grid place-items-center items-center h-[85vh]'>
      <div className='flex flex-col gap-2 '>
        <section className='flex justify-center'>
          <NoSymbolIcon className='size-36 text-red-700' />
        </section>
        <section className='justify-center flex flex-col items-center'>
          <h1 className='text-lg text-red-700'>404 Error - The page is not found</h1>
          <div className='my-[2px]'></div>
          <p className={`${smallfontFace.className} text-sm text-black/90`}>Please check the url. <Link href={'/'} prefetch className={`${smallfontFace.className} text-blue-600 text-sm `}>Go to home</Link></p>
          
        </section>
      </div>
    </main>
  );
}

