'use client';

import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import Link from 'next/link';

import {
   LocaleSwitcher,
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from '^/components';
import { Icons } from '^/assets';
import { cn } from '^/lib/utils';

import styles from './styles.module.css';

const components: { title: string; href: string; description: string }[] = [
   {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
         'A modal dialog that interrupts the user with important content and expects a response.',
   },
   {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description: 'For sighted users to preview content available behind a link.',
   },
   {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
         'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
   },
   {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
   },
   {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
         'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
   },
   {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
         'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
   },
];

export default function Header() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
      document.documentElement.classList.toggle('dark');
   }, [isDarkMode]);

   return (
      <header className="relative flex h-16 max-w-screen justify-between bg-bg1 px-6">
         <div className="flex items-center gap-6">
            <Link href="/">
               <Icons.Binance />
            </Link>
            <div className="relative flex h-16 items-center">
               <Link
                  href="/"
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
            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>Trade</NavigationMenuTrigger>
                     <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                           <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                 <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/">
                                    {/* <Icons.logo className="h-6 w-6" /> */}
                                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                       Beautifully designed components that you can copy and paste
                                       into your apps. Accessible. Customizable. Open Source.
                                    </p>
                                 </a>
                              </NavigationMenuLink>
                           </li>
                           <ListItem
                              href="/markets"
                              title="Introduction">
                              Re-usable components built using Radix UI and Tailwind CSS.
                           </ListItem>
                           <ListItem
                              href="/markets"
                              title="Installation">
                              How to install dependencies and structure your app.
                           </ListItem>
                           <ListItem
                              href="/markets"
                              title="Typography">
                              Styles for headings, paragraphs, lists...etc
                           </ListItem>
                        </ul>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>Futures</NavigationMenuTrigger>
                     <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                           {components.map(component => (
                              <ListItem
                                 key={component.title}
                                 title={component.title}
                                 href={component.href}>
                                 {component.description}
                              </ListItem>
                           ))}
                        </ul>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <Link
                        href="/earn"
                        legacyBehavior
                        passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                           Earn
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         </div>
         <div className="flex">
            <LocaleSwitcher />
            <button
               type="button"
               onClick={() => setIsDarkMode(!isDarkMode)}
               className={styles.theme__icon}>
               <span />
               <span>
                  <span />
                  <span />
                  <span />
                  <span />
               </span>
               <span />
            </button>
            {/* <button
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="group relative size-8 overflow-hidden p-1">
               <span
                  className={cn(
                     'absolute left-1/2 top-1/2 z-10 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[#212121] bg-textBrand transition-[width_0.4s,_height_0.4s,_border_0.4s,_background-color_0.4s]',
                     isDarkMode ? 'size-6 border-green-500 bg-green-500' : '',
                  )}
               />
               <span
                  className={cn(
                     'absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-3xl transition-[transform_0.4s]',
                     isDarkMode ? '-rotate-45 scale-[0.8]' : '',
                  )}>
                  <span className="relative left-1/2 top-0 block h-6 w-0.5 -translate-x-1/2 rounded-[2px] bg-textBrand" />
                  <span className="relative -top-[54%] left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-[2px] bg-textBrand" />
                  <span className="relative -top-[60%] left-1/2 block h-0.5 w-6 -translate-x-1/2 rotate-45 rounded-[2px] bg-textBrand" />
                  <span className="relative -top-[70%] left-1/2 block h-0.5 w-6 -translate-x-1/2 rotate-45 rounded-[2px] bg-textBrand" />
               </span>
               <span
                  className={cn(
                     'absolute left-full top-1/2 z-20 size-5 -translate-x-1/2 rounded-3xl bg-[#212121] transition-[top_0.4s,_left_0.4s] delay-200',
                     isDarkMode ? 'left-[40%] top-[35%]' : '',
                  )}
               />
            </button> */}
         </div>
      </header>
   );
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
   ({ className, title, children, ...props }, ref) => {
      return (
         <li>
            <NavigationMenuLink asChild>
               <a
                  ref={ref}
                  className={cn(
                     'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                     className,
                  )}
                  {...props}>
                  <div className="text-sm font-medium leading-none">{title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                     {children}
                  </p>
               </a>
            </NavigationMenuLink>
         </li>
      );
   },
);
ListItem.displayName = 'ListItem';
