'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeatureList = () => {
     const features = [
          "Payroll",
          "Remittances",
          "Treasury",
          "Government",
          "Fintech",
          "Telecommunications",
          "Industries",
          "Cross-border",
     ];

     return (
          <div className="relative w-full overflow-hidden">
               <motion.div
                    className="flex whitespace-nowrap"
                    style={{ willChange: 'transform' }}
                    animate={{
                         x: ['100%', '-100%'],  
                    }}
                    transition={{
                         duration: 30,  
                         repeat: Infinity, 
                         ease: 'linear',  
                    }}
               >
                    {/* First Set of Features */}
                    {features.map((feature, index) => (
                         <React.Fragment key={index}>
                              <div className="inline-flex items-center px-6">
                                   <h4 className="text-black text-xl md:text-2xl">{feature}</h4>
                              </div>
                              <Image
                                   alt="asterisk"
                                   loading="lazy"
                                   width={28}
                                   height={28}
                                   decoding="async"
                                   className="inline-block mx-6"
                                   style={{ color: 'transparent' }}
                                   src="/assets/icons/asterisk.svg"
                              />
                         </React.Fragment>
                    ))}

                    {features.map((feature, index) => (
                         <React.Fragment key={`second-${index}`}>
                              <div className="inline-flex items-center px-6">
                                   <h4 className="text-black text-xl md:text-2xl">{feature}</h4>
                              </div>
                              <Image
                                   alt="asterisk"
                                   loading="lazy"
                                   width={28}
                                   height={28}
                                   decoding="async"
                                   className="inline-block mx-6"
                                   style={{ color: 'transparent' }}
                                   src="/assets/icons/asterisk.svg"
                              />
                         </React.Fragment>
                    ))}
               </motion.div>
          </div>
     );
};

export default FeatureList;
