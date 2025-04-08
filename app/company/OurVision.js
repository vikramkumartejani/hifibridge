import Image from 'next/image'
import React from 'react'

const OurVision = () => {
     return (
          <div>
               <div className='flex items-center justify-center'>
                    <div className='flex flex-col max-w-xl gap-8 text-center'>
                         <p className='text-black text-xs tracking-[0.1em] uppercase font-spacemono'>Our Vision</p>
                         <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl '>Money should move as fast as the internet</h2>
                    </div>
               </div>

               <div className='w-full h-auto pb-[100px] md:pb-[200px]'></div>

               <div className='relative flex flex-col'>
                    <div className='flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
                         <div className='flex flex-col justify-center order-2 md:order-2 h-full md:w-1/2 gap-4 px-2 md:px-10'>
                              <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
                                   <div className='flex flex-col gap-4 text-center md:text-left'>
                                        <h3 className='text-black text-2xl md:text-4xl '>Business is now default global.</h3>
                                        <p className='text-black text-sm font-spacemono'>For the past 20 years, software has eaten the world. Data now travels at lightpeed, information moves freely across borders, and the future of business is now default global. The globalization of money however, still remains a challenge.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center justify-center order-1 md:order-1 h-full w-full md:w-1/2'>
                              <div className='aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative  overflow-hidden'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full gap-8 '>
                                        <div className="absolute z-40 w-[70%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  alt="Feature 3 Card 1"
                                                  src="/assets/icons/circleIcons.svg"
                                                  width={301}
                                                  height={0}
                                                  className="w-full h-auto"
                                                  loading="lazy"
                                             />
                                        </div>
                                        <div className="absolute z-30 w-[70%] flex items-center justify-center" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 317 317"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <circle cx="158.5" cy="158.5" r="157.5" stroke="#ECEAE5" />
                                                  <circle cx="0" cy="0" r="4" fill="#ECEAE5">
                                                       <animateMotion
                                                            dur="3s"
                                                            repeatCount="indefinite"
                                                            path="M158.5 1 A157.5 157.5 0 1 1 158.5 316 A157.5 157.5 0 1 1 158.5 1"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/icons/world.svg"
                                                  alt="Feature 3 Icon"
                                                  width={80}
                                                  height={80}
                                                  className="w-full h-auto"
                                                  loading="lazy"
                                             />
                                        </div>
                                        <Image src='/assets/our-vision1.webp' alt='our-vision1' width={430} height={602} className='absolute z-10 object-cover w-full h-full inset-0' />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='w-full h-auto pb-[60px] md:pb-[120px]'></div>

               <div className='relative flex flex-col'>
                    <div className='flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
                         <div className='flex flex-col justify-center order-2 md:order-1 h-full md:w-1/2 gap-4 px-2 md:px-10'>
                              <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
                                   <div className='flex flex-col gap-4 text-center md:text-left'>
                                        <h3 className='text-black text-2xl md:text-4xl '>It’s time to accelerate into the future.</h3>
                                        <p className='text-black text-sm font-spacemono'>We see a future where businesses will move money seamlessly across chains and banks to unleash endless business opportunities.HIFI was built on the premise of creating an operating system to allow businesses to integrate into every chain, banking, and payment rail in world.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center justify-center order-1 md:order-2 h-full w-full md:w-1/2'>
                              <div className='aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative  overflow-hidden'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full gap-8 '>
                                        <div className="absolute top-[48%] left-0 z-30 w-[23%] opacity-20" style={{ willChange: 'transform', opacity: 1 }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 158"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  className="overflow-visible"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V127C48 143.569 61.4315 157 78 157H96"
                                                       stroke="#ECEAE5"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#ECEAE5" className="z-20">
                                                       <animateMotion
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V127C48 143.569 61.4315 157 78 157H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="0"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="absolute top-[25%] right-0 z-30 w-[23%] opacity-20" style={{ willChange: 'transform', opacity: 1 }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 158"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V127C48 143.569 61.4315 157 78 157H96"
                                                       stroke="#ECEAE5"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#ECEAE5" className="z-20">
                                                       <animateMotion
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V127C48 143.569 61.4315 157 78 157H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="1s"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card8.webp"
                                                  alt="Feature 3 Card 1"
                                                  width={237}
                                                  height={141}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/icons/speed.svg"
                                                  alt="Feature 3 Icon"
                                                  width={80}
                                                  height={80}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card9.webp"
                                                  alt="Feature 3 Card 1"
                                                  width={240}
                                                  height={0}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <Image src='/assets/card7.webp' alt='card7' width={430} height={602} className='z-10 object-cover absolute w-full h-full inset-0' />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='w-full h-auto pb-[60px] md:pb-[120px]'></div>

               <div className='relative flex flex-col'>
                    <div className='flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
                         <div className='flex flex-col justify-center order-2 md:order-2 h-full md:w-1/2 gap-4 px-2 md:px-10'>
                              <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
                                   <div className='flex flex-col gap-4 text-center md:text-left'>
                                        <h3 className='text-black text-2xl md:text-4xl '>Building the future of finance for everyone.</h3>
                                        <p className='text-black text-sm font-spacemono'>Now, we sit at a new intersection of the next generational shift with blockchain technology. At HIFI, we are so excited to continue to create new tools that will shapes how money moves across borders - built for everyone, everywhere.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center justify-center order-1 md:order-1 h-full w-full md:w-1/2'>
                              <div className='aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative  overflow-hidden'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full gap-12 bg-[#33171E]'>
                                        <div className="absolute top-1/2 left-0 z-30 w-[33%] -ml-[4px]" style={{ opacity: 1, willChange: 'transform' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 143 146"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M4 1H41.5C58.0685 1 71.5 14.4315 71.5 31V107C71.5 123.569 84.9315 137 101.5 137H139"
                                                       stroke="#ECEAE5"
                                                  />
                                                  <circle
                                                       cx="0"
                                                       cy="0"
                                                       r="3"
                                                       fill="#ECEAE5"
                                                       className="z-20"
                                                       opacity="1"
                                                  >
                                                       <animateMotion
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                            path="M4 1H41.5C58.0685 1 71.5 14.4315 71.5 31V107C71.5 123.569 84.9315 137 101.5 137H139"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="0"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="absolute top-[25%] right-0 z-30 w-[33%] opacity-20" style={{ opacity: 1, willChange: "transform" }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 135 140"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H37.5C54.0685 1 67.5 14.4315 67.5 31V109C67.5 125.569 80.9315 139 97.5 139H135"
                                                       stroke="#ECEAE5"
                                                  />
                                                  <circle
                                                       cx="0"
                                                       cy="0"
                                                       r="3"
                                                       fill="#ECEAE5"
                                                       className="z-20"
                                                       opacity="1"
                                                  >
                                                       <animateMotion
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                            path="M0 1H37.5C54.0685 1 67.5 14.4315 67.5 31V109C67.5 125.569 80.9315 139 97.5 139H135"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="1"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="relative z-30 mr-12 w-[55%]" style={{ opacity: 1, willChange: "transform", transform: "none" }}>
                                             <Image
                                                  src="/assets/card11.webp"
                                                  alt="Feature 3 Card 1"
                                                  width={240}
                                                  height={0}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: "transform", transform: "none" }}>
                                             <Image
                                                  src="/assets/icons/home.svg"
                                                  alt="Feature 1 Icon"
                                                  width={80}
                                                  height={80}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative ml-12 z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card12.webp"
                                                  alt="Feature 3 Card 1"
                                                  width={240}
                                                  height={0}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <Image src='/assets/card10.webp' alt='card10' width={430} height={602} className='z-10 object-cover absolute w-full h-full inset-0' />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OurVision