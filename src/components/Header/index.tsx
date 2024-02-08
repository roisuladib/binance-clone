'use client';

import { IcBinance } from '^/assets';
import Link from 'next/link';

export default function Header() {
   return (
      <header className="max-w-screen bg-bg1 relative flex h-16 justify-between px-6">
         <div className="flex items-center gap-6">
            <Link href="/">
               <IcBinance />
            </Link>
            <div className="relative flex h-16 items-center">
               <Link
                  href="/menu"
                  className="text-textPrimary hover:text-textBrand relative flex h-full items-center text-sm font-medium">
                  Buy Crypto
               </Link>
            </div>
            <div className="relative flex h-16 items-center">
               <Link
                  href="/markets"
                  className="text-textPrimary hover:text-textBrand relative flex h-full items-center text-sm font-medium">
                  Markets
               </Link>
            </div>
         </div>
         Header
      </header>
   );
}
