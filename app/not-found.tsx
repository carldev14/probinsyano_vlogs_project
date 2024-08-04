// pages/404.js

import smallfontFace from '@/utils/smallfontface';
import { NoSymbolIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main className='grid place-items-center items-center h-[85vh] p-2'>
      <div className='flex flex-col gap-2 '>
        <section className='flex justify-center'>
          <NoSymbolIcon className='md:size-36 size-28 text-red-700' />
        </section>
        <section className='justify-center flex flex-col items-center'>
          <h1 className='md:text-lg text-base text-center text-red-700'>404 Error - The page is not found</h1>
          <div className='my-[2px]'></div>
          <p className={`${smallfontFace.className} md:text-sm text-xs text-black/90`}>Please check the url. <Link href={'/'} prefetch className={`${smallfontFace.className} text-blue-600 text-sm `}>Go to home</Link></p>
          
        </section>
      </div>
    </main>
  );
}

