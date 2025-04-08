import React from 'react'

const TheChallenge = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-[80vh]'>
               <div className='relative flex flex-col justify-between h-[250px] md:h-full col-span-1 gap-8 px-6 py-8 md:px-8 md:py-10 overflow-hidden bg-[#7C4A65] rounded-3xl'>
                    <div className='flex flex-col gap-5 md:gap-8'>
                         <p className='text-xs tracking-[0.1em] uppercase z-30 max-w-lg text-white font-spacemono'>The Challenge</p>
                         <h3 className='text-2xl md:text-4xl z-30 text-white'>What problems does HIFI solve?</h3>
                    </div>
               </div>
               <div className='grid h-full grid-cols-2 col-span-2 bg-white'>
                    <div className="col-span-1">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4 opacity-100 will-change-transform">
                              <h2 className="text-black text-4xl leading-[2.75rem] md:text-5xl md:leading-[3.5rem]">30 Days</h2>
                              <p className="text-black text-sm font-spacemono">Average time to complete a global supplier payment</p>
                         </div>
                    </div>
                    <div className="col-span-1">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4 opacity-100 will-change-transform">
                              <h2 className="text-black text-4xl leading-[2.75rem] md:text-5xl md:leading-[3.5rem]">1 in 5</h2>
                              <p className="text-black text-sm font-spacemono">People experience payments fraud</p>
                         </div>
                    </div>
                    <div className="col-span-1">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4 opacity-100 will-change-transform">
                              <h2 className="text-black text-4xl leading-[2.75rem] md:text-5xl md:leading-[3.5rem]">$8</h2>
                              <p className="text-black text-sm font-spacemono">Average cost of a single vendor payment</p>
                         </div>
                    </div>
                    <div className="col-span-1">
                         <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4 opacity-100 will-change-transform">
                              <h2 className="text-black text-4xl leading-[2.75rem] md:text-5xl md:leading-[3.5rem]">47%</h2>
                              <p className="text-black text-sm font-spacemono">Nearly half experience payment delays</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default TheChallenge