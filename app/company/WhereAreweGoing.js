import React from "react";

const WhereAreweGoing = () => {
     return (
          <div className="flex flex-col items-center justify-center bg-[#33171E] h-full md:h-[80vh] rounded-3xl gap-10 md:gap-20 p-6 py-6 md:px-8 md:py-10">
               <div className="flex flex-col items-center justify-center max-w-xl gap-5 text-center md:gap-8">
                    <p className="text-xs tracking-[0.1em] uppercase pt-8 text-white md:pt-0 font-spacemono">Where are we going</p>
                    <h2 className="text-2xl md:text-4xl text-white">The future of money movement is powered by HIFI</h2>
               </div>
               <div className="grid h-auto grid-cols-1 md:px-24 md:grid-cols-3">
                    <div className="col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl border-[#7C4A65] group gap-4">
                              <p className="text-xs tracking-[0.1em] uppercase text-white font-spacemono">Merchant Acceptance</p>
                              <h2 className="text-4xl leading-4xl md:text-5xl md:leading-5xl text-[#F2FF66]">85%</h2>
                              <p className="text-sm text-white font-spacemono">U.S Merchants are planning to accept digital assets by the year 2026.</p>
                         </div>
                    </div>    
                    <div className="col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl border-[#7C4A65] group gap-4">
                              <p className="text-xs tracking-[0.1em] uppercase text-white font-spacemono">Merchant Impact</p>
                              <h2 className="text-4xl leading-4xl md:text-5xl md:leading-5xl text-[#F2FF66]">93%</h2>
                              <p className="text-sm text-white font-spacemono">Merchants that experience a positive impact on customer metrics when accepting crypto.</p>
                         </div>
                    </div>    
                    <div className="col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl border-[#7C4A65] group gap-4">
                              <p className="text-xs tracking-[0.1em] uppercase text-white font-spacemono">Customer Sentiment</p>
                              <h2 className="text-4xl leading-4xl md:text-5xl md:leading-5xl text-[#F2FF66]">3 in 4</h2>
                              <p className="text-sm text-white font-spacemono">Customers who expressed the desire to transact with digital assets.</p>
                         </div>
                    </div>    
               </div>
          </div>
     );
};

export default WhereAreweGoing;
