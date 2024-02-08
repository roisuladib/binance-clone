'use client';

import { IcBinance } from '^/assets';
import Link from 'next/link';

export default function Header() {
   return (
      <header className="relative flex h-16 max-w-screen justify-between bg-bg1 px-6">
         <div className="flex items-center gap-6">
            <Link href="/">
               <IcBinance />
            </Link>
            <div className="relative flex h-16 items-center">
               <Link
                  href="/menu"
                  className="relative flex h-full items-center text-sm font-medium text-textPrimary hover:text-textBrand">
                  Buy Crypto
               </Link>
            </div>
            <div className="relative flex h-16 items-center">
               <Link
                  href="/markets"
                  className="relative flex h-full items-center text-sm font-medium text-textPrimary hover:text-textBrand">
                  Markets
               </Link>
            </div>
         </div>
         Header
      </header>
   );
}
