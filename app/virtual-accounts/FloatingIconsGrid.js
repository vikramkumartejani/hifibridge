'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FloatingIconsGrid() {
     // Define icon data with specific symbols for each position
     const columns = [
          // Left column with white dots on line
          {
               position: '12%',
               icons: [
                    { y: '20%', symbol: 'T', altText: 'Letter T icon' },
                    { y: '50%', symbol: 'link', altText: 'Link icon' },
                    { y: '80%', symbol: 'ethereum', altText: 'Ethereum icon' }
               ],
               showDots: true
          },
          // Middle column with white dots on line
          {
               position: '50%',
               icons: [
                    { y: '20%', symbol: 'dollar-circle', altText: 'Dollar circle icon' },
                    { y: '50%', symbol: 'speed', altText: 'Speed icon', highlight: true },
                    { y: '80%', symbol: 'crosshair', altText: 'Crosshair icon' }
               ],
               showDots: true
          },
          // Right column with white dots on line
          {
               position: '80%',
               icons: [
                    { y: '20%', symbol: 'dollar', altText: 'Dollar icon' },
                    { y: '50%', symbol: 'T', altText: 'Letter T icon' },
                    { y: '80%', symbol: 'currency', altText: 'Currency icon' }
               ],
               showDots: true
          }
     ];

     // Map symbols to their respective SVG/image paths
     const getSymbolContent = (symbol) => {
          switch (symbol) {
               case 'T':
                    return (
                         <div className="text-black font-bold text-xl">T</div>
                    );
               case 'link':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                         </svg>
                    );
               case 'ethereum':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20">
                              <path fill="currentColor" d="M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75M5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z" />
                         </svg>
                    );
               case 'dollar-circle':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
                              <path fill="currentColor" d="M12 6v12M8 10h8M8 14h8" />
                         </svg>
                    );
               case 'speed':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                         </svg>
                    );
               case 'crosshair':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="22" y1="12" x2="18" y2="12" />
                              <line x1="6" y1="12" x2="2" y2="12" />
                              <line x1="12" y1="6" x2="12" y2="2" />
                              <line x1="12" y1="22" x2="12" y2="18" />
                         </svg>
                    );
               case 'dollar':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20">
                              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                         </svg>
                    );
               case 'currency':
                    return (
                         <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                         </svg>
                    );
               default:
                    return null;
          }
     };

     return (
          <div className="relative w-full h-full min-h-[600px] rounded-2xl overflow-hidden">
               {/* Background Image */}
               <Image
                    src="/assets/dollor.webp"
                    alt="Person working on laptop"
                    fill
                    className="object-cover"
                    priority
               />

               {/* Vertical lines with dots */}
               {columns.map((column, colIndex) => (
                    <div key={`column-${colIndex}`} className="absolute h-full" style={{ left: column.position }}>
                         {/* Vertical line */}
                         <div className="absolute h-full w-0.5 bg-white/20" />

                         {/* Dots on line */}
                         {column.showDots && (
                              <>
                                   <div className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                        style={{ top: '35%', left: '-2px' }} />
                                   <div className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                        style={{ top: '65%', left: '-2px' }} />
                              </>
                         )}

                         {/* Icons for this column */}
                         {column.icons.map((icon, iconIndex) => (
                              <motion.div
                                   key={`icon-${colIndex}-${iconIndex}`}
                                   className={`absolute w-10 h-10 rounded-lg shadow-md flex items-center justify-center ${icon.highlight ? 'bg-yellow-300' : 'bg-white'
                                        }`}
                                   style={{
                                        top: icon.y,
                                        left: '0',
                                        transform: 'translateX(-50%)'
                                   }}
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: (colIndex * 3 + iconIndex) * 0.1 }}
                              >
                                   {getSymbolContent(icon.symbol)}
                              </motion.div>
                         ))}
                    </div>
               ))}
          </div>
     );
}