import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
     return (
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <div className="flex flex-col w-full px-2 py-10 lg:py-12 lg:px-4 ">
                    <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-5">
                         <div className="flex flex-col">
                              <Image src='/assets/hifi-icon.svg' alt="hifi" width={50} height={50} />
                         </div>
                         <div className="flex flex-col border-b-[1px] border-[#ECEAE5] pb-8 md:border-b-[0px] md:pb-0">
                              <h3 className="text-black text-lg  mb-4">Platform</h3>
                              <div className="flex flex-col gap-4">
                                   <Link href='/platform-overview' className="flex flex-row gap-2"><p className="text-black text-sm font-spacemono">Platform Overview</p></Link>
                                   <Link href='/virtual-accounts' className="flex flex-row gap-2"><p className="text-black text-sm font-spacemono">Virtual Accounts</p></Link>
                                   <Link href='/virtual-accounts' className="flex flex-row gap-2">
                                        <p className="text-black text-sm font-spacemono">Global Accounts</p>
                                        <p className="text-black font-spacemono text-[8px] tracking-[0.1em] uppercase rounded-sm bg-[#D9E6E1] w-fit py-[6px] px-1 h-fit leading-none">Coming Soon</p>
                                   </Link>
                              </div>
                         </div>
                         <div className="flex flex-col border-b-[1px] border-[#ECEAE5] pb-8 md:border-b-[0px] md:pb-0">
                              <h3 className="text-black text-lg  mb-4">Developers</h3>
                              <div className="flex flex-col gap-4">
                                   <Link href='https://docs.hifibridge.com/v1.0' className="text-black text-sm font-spacemono">Documentation</Link>
                                   <Link href="mailto:techsupport@hifibridge.com" className="text-black text-sm font-spacemono">Support</Link>
                                   <Link href='https://dashboard.hifibridge.com/signin' className="text-black text-sm font-spacemono">Sign In</Link>
                              </div>
                         </div>
                         <div className="flex flex-col border-b-[1px] border-[#ECEAE5] pb-8 md:border-b-[0px] md:pb-0">
                              <h3 className="text-black text-lg  mb-4">Company</h3>
                              <div className="flex flex-col gap-4">
                                   <Link href='/company' className="text-black text-sm font-spacemono">About</Link>
                              </div>
                         </div>
                         <div className="flex flex-col">
                              <h3 className="text-black text-lg  mb-4">Contact</h3>
                              <div className="flex flex-col gap-4">
                                   <Link href='/contact' className="text-black text-sm font-spacemono">General Inquiries</Link>
                                   <Link href='/contact' className="text-black text-sm font-spacemono">Sales</Link>
                                   <Link href='/contact' className="text-black text-sm font-spacemono">Press</Link>
                                   <Link href="mailto:contact@hifibridge.com" className="text-black text-sm font-spacemono">Support</Link>
                                   <Link href='mailto:contact@hifibridge.com' className="text-black text-sm font-spacemono">Compliance</Link>
                              </div>
                         </div>
                    </div>
                    <div>
                         <p className="text-black text-[10px] leading-normal lg:max-w-[50%] pb-4 font-spacemono">HIFI Bridge Inc, is a financial  technology company and not a bank. The material published on this website is for informational purposes only and is not intended to, and should not be taken to, constitute investment, tax, legal or other advice by HIFI Bridge, Inc or its affiliates.</p>
                         <div className="flex flex-col justify-between gap-2 pt-2 border-t border-[#ECEAE5] lg:items-center lg:flex-row">
                              <p className="text-black text-[10px] tracking-[0.1em] uppercase mt-2 font-spacemono">©  2025 HIFI BRIDGE. ALL RIGHTS RESERVED.</p>
                              <div className="flex gap-4">
                                   <Link href='/terms-condition'><p className="text-black text-[10px] tracking-[0.1em] uppercase font-spacemono">Terms of Service</p></Link>
                                   <Link href='/privacy-policy'><p className="text-black text-[10px] tracking-[0.1em] uppercase font-spacemono">Privacy Policy</p></Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
