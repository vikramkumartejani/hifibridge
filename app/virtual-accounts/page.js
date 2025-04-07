import Image from "next/image";
import Link from "next/link";
import FloatingIconsGrid from "./FloatingIconsGrid";
import GetStarted from "../components/GetStarted";
import FeatureList from "./FeatureList";

export const metadata = {
     title: 'Virtual Accounts | HIFI',
     description: 'Learn more about what we do.',
};

export default function VirtualAccounts() {
     return (
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <div className="grid items-center w-full h-full gap-0 md:min-h-[calc(100vh-164px)] max-h-full md:max-h-[960px] grid-cols-1 md:grid-cols-7">
                    <div className="flex flex-col h-full justify-center w-full rounded-[30px] bg-[#ECEAE5] py-8 px-5 lg:py-32 lg:px-28 gap-4 md:gap-8 col-span-4 order-2 md:order-1">
                         <div className="flex items-center gap-2">
                              <div className="relative flex items-center justify-center flex-none transition-all duration-300 bg-white rounded-md w-7 h-7 group-hover:bg-lemon">
                                   <div className="w-4 h-4">
                                        <Image src='/assets/icons/virtual-accounts.svg' alt="virtual-account" width={16} height={16} />
                                   </div>
                              </div>
                              <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">Virtual Accounts</p>
                         </div>
                         <h1 className="text-black text-4xl leading-4xl md:text-5xl md:leading-5xl ">Launch virtual accounts to convert between dollars and stablecoins</h1>
                         <p className="text-black text-sm font-spacemono">Open and manage virtual accounts to move into and out of any dollar and stablecoin.</p>
                         <Link href='/contact'>
                              <button className="px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group">
                                   <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">Request Access</p>
                                   <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 ">
                                        <Image src='/assets/icons/arrow_outward.svg' alt="arrow_outward" width={10} height={10} />
                                   </div>
                              </button>
                         </Link>
                    </div>
                    <div className="relative bg-[#C0B395] aspect-square order-1 md:order-2 md:h-full md:aspect-auto w-full flex items-center justify-center col-span-3 rounded-[30px] overflow-hidden">
                         <div className="max-w-[150px] w-full md:max-w-[240px] h-full relative z-20">
                              <Image src='/assets/virtual-accounts-hero.webp' alt="virtual-accounts-hero" width={240} height={602} className="z-20 object-contain flex items-center justify-center h-full w-full" />
                         </div>
                         <video
                              src="/assets/Car-Driving.mp4"
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="absolute top-0 left-0 w-full h-full object-cover z-10"
                         />
                    </div>

               </div>

               <div className="pt-12">
                    <div className="relative w-full overflow-hidden">
                         <FeatureList/>
                    </div>
               </div>

               <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
               <div className="flex items-center justify-center max-w-sm mx-auto md:max-w-xl">
                    <div className="flex flex-col gap-8 text-center">
                         <h2 className="text-black text-4xl leading-4xl md:text-5xl md:leading-5xl">Open and manage virtual accounts</h2>
                         <p className="text-black text-sm font-spacemono">Process payments, initiate payouts, and transfer funds arounds the world - at the speed of the internet. Automate and streamline transactions, track expenses, and optimize your financial activities with ease.</p>
                    </div>
               </div>

               <div className="w-full h-auto pb-[100px] md:pb-[200px] "></div>

               <div className="relative flex flex-col">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10">
                         <div className="flex flex-col justify-center order-2 md:order-2 h-full md:w-1/2 gap-4 px-2 md:px-10">
                              <div className="flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0">
                                   <div className="flex flex-col gap-4 text-center md:text-left">
                                        <h3 className="text-black text-2xl md:text-4xl">Dollar-to-stablecoin orchestration</h3>
                                        <p className="text-black text-sm font-spacemono">Seamlessly move in and out of dollars with a virtual account. Convert between dollars and stablecoins in any format for your customers.</p>
                                   </div>
                              </div>
                         </div>

                         <div className="flex items-center justify-center order-1 md:order-1 h-full w-full md:w-1/2">
                              <div className="aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative overflow-hidden">
                                   {/* <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-4">
                                   </div> */}
                                   <FloatingIconsGrid />
                              </div>
                         </div>
                    </div>
               </div>

               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>

               <div className="relative flex flex-col">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10">
                         <div className="flex flex-col justify-center order-2 md:order-1 h-full md:w-1/2 gap-4 px-2 md:px-10">
                              <div className="flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0">
                                   <div className="flex flex-col gap-4 text-center md:text-left">
                                        <h3 className="text-black text-2xl md:text-4xl ">Unique routing and account numbers</h3>
                                        <p className="text-black text-sm font-spacemono">Gain access to a real bank account with full ACH capabilities, unique account and routing numbers to store digital dollars.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="flex items-center justify-center order-1 md:order-2 h-full w-full md:w-1/2">
                              <div className="aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative overflow-hidden">
                                   <div className="relative flex flex-col items-center justify-center w-full h-full gap-12 bg-[#406354]">
                                        <div className="absolute z-30 w-[45%]" style={{ opacity: 1, willChange: 'transform' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 188 240"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M187 0L187 90C187 106.569 173.569 120 157 120L31 120C14.4315 120 1.00001 133.431 1.00001 150L1 240"
                                                       stroke="#C0B395"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#C0B395" className="z-20">
                                                       <animateMotion
                                                            dur="4"
                                                            repeatCount="indefinite"
                                                            path="M187 0L187 90C187 106.569 173.569 120 157 120L31 120C14.4315 120 1.00001 133.431 1.00001 150L1 240"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="0"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>

                                        <div className="relative z-30 w-[55%]" style={{ opacity: 100, willChange: 'transform', transform: 'none' }}>
                                             <Image src='/assets/card1.webp' alt="card1" width={500} height={500} className="w-full h-auto" />
                                        </div>

                                        <div
                                             className="relative z-30 w-[18%]"
                                             style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
                                        >
                                             <img
                                                  alt="Feature 3 Icon"
                                                  loading="lazy"
                                                  width="80"
                                                  height="80"
                                                  decoding="async"
                                                  data-nimg="1"
                                                  className="w-full h-auto"
                                                  style={{ color: 'transparent' }}
                                                  src="/assets/icons/bank.svg"
                                             />
                                        </div>

                                        <div className="relative z-30 w-[55%]" style={{ opacity: 100, willChange: 'transform', transform: 'none' }}>
                                             <Image src='/assets/card2.webp' alt="card1" width={500} height={500} className="w-full h-auto" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>

               <div className="relative flex flex-col">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10">
                         <div className="flex flex-col justify-center order-2 md:order-2 h-full md:w-1/2 gap-4 px-2 md:px-10">
                              <div className="flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0">
                                   <div className="flex flex-col gap-4 text-center md:text-left">
                                        <h3 className="text-black text-2xl md:text-4xl">Flexible business and individual accounts</h3>
                                        <p className="text-black text-sm">Open accounts for businesses or individuals with both KYB and KYC due diligence covered by HIFI.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="flex items-center justify-center order-1 md:order-1 h-full w-full md:w-1/2">
                              <div className="aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative  overflow-hidden">
                                   <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-8 bg-[#33171E]">
                                        <div className="absolute top-[25%] right-0 z-30 w-[25%] opacity-20 flex items-center justify-end" style={{ opacity: 1, willChange: 'transform' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 138"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                       stroke="#7C4A65"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                       <animateMotion
                                                            dur="2"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="0"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="absolute top-[48%] left-0 z-30 w-[25%] opacity-20 flex items-center justify-start" style={{ opacity: 1, willChange: 'transform' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 138"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                       stroke="#7C4A65"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                       <animateMotion
                                                            dur="2"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="1"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div
                                             className="relative z-30 w-[55%]"
                                             style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
                                        >
                                             <Image
                                                  src="/assets/card5.webp"
                                                  alt="Feature 3 Card 1"
                                                  loading="lazy"
                                                  width={240}
                                                  height={0}
                                                  decoding="async"
                                                  className="w-full h-auto"
                                                  style={{ color: 'transparent' }}
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/icons/flexible-business.svg"
                                                  alt="Feature 3 Icon"
                                                  loading="lazy"
                                                  width={77}
                                                  height={77}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card6.webp"
                                                  alt="Feature 3 Card 1"
                                                  loading="lazy"
                                                  width={240}
                                                  height={0}
                                                  decoding="async"
                                                  className="w-full h-auto"
                                                  style={{ color: 'transparent' }}
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>

               <div className="relative flex flex-col">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10">
                         <div className="flex flex-col justify-center order-2 md:order-1 h-full md:w-1/2 gap-4 px-2 md:px-10">
                              <div className="flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0">
                                   <div className="flex flex-col gap-4 text-center md:text-left">
                                        <h3 className="text-black text-2xl md:text-4xl">Instant payment clearing</h3>
                                        <p className="text-black text-sm font-spacemono">Instant account funding and withdrawals with real-time payment rails any way you choose.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="flex items-center justify-center order-1 md:order-2 h-full w-full md:w-1/2">
                              <div className="aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative  overflow-hidden">
                                   <div className="relative flex flex-col items-center justify-center w-full h-full gap-8 bg-[#C0B395]">
                                        <div className="absolute top-[45%] left-0 z-30 w-[24%] opacity-20" style={{ opacity: 1, willChange: 'transform' }}>
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
                                                            dur="2"
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
                                        <div className="absolute top-[25%] right-0 z-30 w-[24%] opacity-20" style={{ opacity: 1, willChange: 'transform' }}>
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
                                                            dur="2"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V127C48 143.569 61.4315 157 78 157H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="1"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card3.webp"
                                                  alt="Feature 3 Card 1"
                                                  loading="lazy"
                                                  width={240}
                                                  height={0}
                                                  className="w-full h-auto"
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/icons/power.svg"
                                                  alt="Feature 3 Icon"
                                                  loading="lazy"
                                                  width={80}
                                                  height={80}
                                                  className="w-full h-auto"
                                                  style={{ color: 'transparent' }}
                                             />
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card4.webp"
                                                  alt="Feature 3 Card 1"
                                                  loading="lazy"
                                                  width={240}
                                                  height={0}
                                                  className="w-full h-auto"
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                             />
                                        </div>
                                        <Image src='/assets/instant-payment-clearing.webp' alt="instant" width={430} height={602} className="z-10 object-cover w-fit h-full absolute inset-0" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>

               <div className="flex items-center w-full px-4">
                    <div className="flex flex-col max-w-2xl gap-4 px-2 mx-auto md:gap-8">
                         <h4 className="text-black text-xl md:text-2xl">What are virtual accounts?</h4>
                         <p className="text-black text-sm font-spacemono">Virtual accounts are accounts that have unique account and routing numbers. These accounts enable seamless conversion between dollars and stablecoins, offering a modern solution for managing digital assets and traditional currencies.</p>
                    </div>
               </div>

               <div className="w-full h-auto pb-[100px] md:pb-[200px] "></div>

               <GetStarted />
          </div>
     );
}
