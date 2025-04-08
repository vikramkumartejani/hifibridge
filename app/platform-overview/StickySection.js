'use client';

import { useEffect, useState } from 'react';

const StickySection = () => {
     const [activeSection, setActiveSection] = useState('first');

     useEffect(() => {
          // Create an observer for the second section
          const secondSectionObserver = new IntersectionObserver(
               ([entry]) => {
                    console.log('Second section is', entry.isIntersecting ? 'in view' : 'out of view');
                    if (entry.isIntersecting) {
                         setActiveSection('second');
                    } else {
                         setActiveSection('first');
                    }
               },
               { threshold: 0.5 }
          );

          // Observe the second section
          const secondSection = document.getElementById('secondSection');
          if (secondSection) {
               secondSectionObserver.observe(secondSection);
          }

          // Cleanup observer when component is unmounted
          return () => {
               if (secondSection) {
                    secondSectionObserver.unobserve(secondSection);
               }
          };
     }, []);

     return (
          <>
               {/* First Section */}
               <div
                    className={`relative h-[140vh] pt-20 transition-opacity duration-300 ${activeSection === 'second' ? 'opacity-0 pointer-events-none' : 'opacity-100'
                         }`}
               >
                    <div className="sticky -translate-y-1/2 top-1/2">
                         <div style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                              <div className="flex flex-col items-center justify-center w-full gap-2">
                                   <h1 className="text-black text-6xl md:text-8xl md:leading-8xl">100X</h1>
                                   <p className="text-black text-sm max-w-md text-center font-spacemono">
                                        Gain access to the fastest payments rails to accelerate settlement to seconds.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="absolute top-[75%] w-full h-screen pointer-events-none"></div>
               </div>

               {/* Second Section */}
               <div
                    id="secondSection"
                    className={`relative h-[140vh] pt-20 transition-opacity duration-300 ${activeSection === 'first' ? 'opacity-0 pointer-events-none' : 'opacity-100'
                         }`}
               >
                    <div className="sticky -translate-y-1/2 top-1/2">
                         <div style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                              <div className="flex flex-col items-center justify-center w-full gap-2">
                                   <h1 className="text-black text-6xl md:text-8xl md:leading-8xl">24/7/365</h1>
                                   <p className="text-black text-sm max-w-md text-center font-spacemono">
                                        No weekends. No bank holidays. No downtime. Move money freely whenever you do business.
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="absolute top-[75%] w-full h-screen pointer-events-none"></div>
               </div>
          </>
     );
};

export default StickySection;