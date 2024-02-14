import { Icons } from '^/assets';
import { Locale, i18n } from '^/i18n';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';

const ulVariants: Variants = {
   hidden: { opacity: 0, scale: 0 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2,
      },
   },
};
const liVariants: Variants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
   },
};

export const LocaleSwitcher = () => {
   const pathName = usePathname();

   const [visible, setVisible] = useState(false);

   const redirectedPathName = useCallback(
      (locale: Locale) => {
         if (!pathName) return '/';
         const segments = pathName.split('/');
         segments[1] = locale;
         return segments.join('/');
      },
      [pathName],
   );

   return (
      <div className="group/language relative inline-flex w-fit">
         <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => setVisible(true)}
            onHoverEnd={e => setVisible(false)}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
            <Icons.Languange />
         </motion.div>
         <AnimatePresence>
            {visible && (
               <div className="absolute left-0 top-full inline-flex w-max cursor-auto text-textPrimary">
                  <motion.ul
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     variants={ulVariants}
                     className="grid grid-cols-2 gap-6 rounded-b-lg bg-popupBg p-6 shadow-[0px_8px_8px_0px_rgba(24,26,32,.08)]">
                     {i18n.locales.map((locale, index) => (
                        <motion.li
                           key={`${locale}-${index}`}
                           variants={liVariants}>
                           <Link href={redirectedPathName(locale)}>{locale}</Link>
                        </motion.li>
                     ))}
                  </motion.ul>
               </div>
            )}
         </AnimatePresence>
      </div>
   );
};
