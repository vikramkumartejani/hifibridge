import Image from "next/image";
import Link from "next/link";
import React from "react";
import DocumentationDropdown from "./Header/DocumentationDropdown";
import PlatformDropdown from "./Header/PlatformPlatformDropdown";
import MobileHeader from "./Header/MobileHeader";

const Header = () => {
     return (
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <div className="sticky top-0 left-0 z-50 w-full">
                    {/* Desktop */}
                    <div className="pt-8 pb-4 w-full lg:pt-8 z-[99999999] bg-white px-0 lg:px-4 relative hidden lg:block">
                         <div className="flex items-center justify-between w-full">
                              <Link href="/" className="relative z-10 w-full">
                                   <Image src="/assets/logo.svg" alt="logo" width={50} height={20} />
                              </Link>
                              <div className="relative flex items-center justify-center w-full gap-6">
                                   <PlatformDropdown />
                                   <Link
                                        href="/company"
                                        className="text-black text-sm font-spacemono"
                                   >
                                        Company
                                   </Link>
                                   <DocumentationDropdown />
                              </div>

                              {/* Right Buttons */}
                              <div className="flex justify-end w-full gap-2">
                                   <Link href="https://dashboard.hifibridge.com/signin">
                                        <button className="px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#eceae5] group">
                                             <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">
                                                  Login
                                             </p>
                                        </button>
                                   </Link>
                                   <Link href="/contact">
                                        <button className="px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group">
                                             <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">
                                                  Start Now
                                             </p>
                                             <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0">
                                                  <Image
                                                       src="/assets/icons/arrow_outward.svg"
                                                       alt="arrow_outward"
                                                       width={10}
                                                       height={10}
                                                  />
                                             </div>
                                        </button>
                                   </Link>
                              </div>
                         </div>
                    </div>

                    <MobileHeader />
               </div>
          </div>
     );
};

export default Header;
