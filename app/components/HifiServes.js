'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HifiServes = () => {
     const features = [
          'Neobanks',
          'B2B Supply Chain',
          'Fintech Applications',
          'AI LLM Agents',
          'Payment Processors',
          'Cross-Border Payments',
          'FX Trading',
          'Remittances',
          'Wallet Infrastructure',
          'Corporate Treasuries',
     ];
     return (
          <>
               <div className="flex items-center justify-center max-w-sm mx-auto md:max-w-xl">
                    <div className="flex flex-col gap-3 px-6 text-center">
                         <h3 className="text-black text-2xl md:text-4xl">
                              HIFI serves hundreds of money movement flows
                         </h3>
                         <p className="text-black text-sm font-spacemono">
                              A coordination layer to consolidate banks, liquidity provisioning, money transmitters, compliance, and wallets into one integration. Build for any money movement use case.
                         </p>
                    </div>
               </div>
               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>

               <div className="pt-12">
                    <div className="relative w-full overflow-hidden">
                         <motion.div
                              className="flex whitespace-nowrap"
                              style={{ willChange: 'transform' }}
                              animate={{
                                   x: ['0%', '-100%'],
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
               </div>
          </>
     )
}

export default HifiServes