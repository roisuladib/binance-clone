'use client';

import { useCallback, useRef } from 'react';
import { createRoot } from 'react-dom/client';

export interface RipplesInterface {
   on?: 'click' | 'mouseDown' | 'clickAndMouseDown' | 'hover';
   color?: string;
   opacity?: number;
   blur?: number;
   duration?: number;
   fillAndHold?: boolean;
   optimize?: boolean;
   rippleElement?: React.ReactNode;
   className?: string;
   zIndex?: number;
}

//ripple component
export function Ripples({
   on = 'click',
   color = 'white',
   opacity = 1,
   blur = 0,
   duration = 500,
   fillAndHold = false,
   optimize = false,
   rippleElement,
   className,
   zIndex,
}: RipplesInterface) {
   const neverRemove = !optimize;
   const ripplesurfaceRef = useRef<HTMLDivElement>(null);
   const style: React.CSSProperties = {
      zIndex,
   };

   const addRipple = useCallback(
      (
         element: HTMLElement,
         event: React.MouseEvent<HTMLDivElement, MouseEvent>,
         color: string,
         opacity: number,
         blur: number,
         duration: number,
         fillAndHold: boolean,
         neverRemove: boolean,
         rippleElement?: React.ReactNode,
         className?: string,
         zIndex?: number,
      ) => {
         const newRipple = document.createElement('div');

         //handle custom ripple
         const newRoot = rippleElement && createRoot(newRipple);
         newRoot && newRoot.render(rippleElement);

         //styles for ripple
         Object.assign(newRipple.style, {
            position: 'absolute',
            borderRadius: '50%',
            transform: 'scale(0)',
            zIndex: zIndex,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
            opacity: String(opacity),
            filter: `blur(${blur}rem)`,
            transition: `transform ${duration}ms linear, opacity ${duration}ms linear`,
         });

         //append param classes to ripple element
         className &&
            className
               .split(' ')
               .forEach(className => className && newRipple.classList.add(className));

         //determine and set size and position
         const rect = element.getBoundingClientRect();
         const size = Math.max(rect.width, rect.height);
         const left = event.clientX - rect.left - size / 2;
         const top = event.clientY - rect.top - size / 2;

         Object.assign(newRipple.style, {
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}px`,
            top: `${top}px`,
         });

         //append
         element.appendChild(newRipple);

         //trigger the ripple effect
         setTimeout(() => {
            newRipple.style.transform = 'scale(4)';
            if (!fillAndHold) {
               newRipple.style.opacity = '0';
            }
         }, 0);

         //remove (only if neverRemove is false, and fillAndHold is also false)
         if (!neverRemove && !fillAndHold) {
            setTimeout(() => {
               element.removeChild(newRipple);
            }, duration);
         }

         //handle fill and hold
         if (fillAndHold) {
            document.addEventListener(
               'mouseup',
               () => {
                  newRipple.style.opacity = '0';
                  if (!neverRemove) {
                     setTimeout(() => {
                        element.removeChild(newRipple);
                     }, duration);
                  }
               },
               {
                  once: true,
               },
            );
         }
      },
      [],
   );

   const handleEvent = useCallback(
      (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
         addRipple(
            ripplesurfaceRef.current!,
            event,
            color,
            opacity,
            blur,
            duration,
            fillAndHold,
            neverRemove,
            rippleElement,
            className,
         );
      },
      [
         addRipple,
         blur,
         className,
         color,
         duration,
         fillAndHold,
         neverRemove,
         opacity,
         rippleElement,
      ],
   );
   const eventHandlers: Record<
      string,
      (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
   > = {};

   if (fillAndHold) {
      eventHandlers.onMouseDown = handleEvent;
   } else if (on === 'mouseDown') {
      eventHandlers.onMouseDown = handleEvent;
   } else if (on === 'click') {
      eventHandlers.onClick = handleEvent;
   } else if (on === 'hover') {
      eventHandlers.onMouseEnter = handleEvent;
   } else if (on === 'clickAndMouseDown') {
      eventHandlers.onClick = handleEvent;
      eventHandlers.onMouseDown = handleEvent;
   }
   return (
      <div
         aria-hidden
         ref={ripplesurfaceRef}
         className="absolute left-0 top-0 h-full w-full"
         style={style}
         {...eventHandlers}
      />
   );
}
