import React from 'react'

const TheSolution = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-[80vh]'>
               <div className='relative col-span-2 rounded-[30px] overflow-hidden min-h-[400px]'>
                    <video src="/assets/Basketball-Court.mp4" className='absolute object-cover w-full h-full' muted autoPlay loop playsInline ></video>
               </div>
               <div className='relative flex flex-col justify-between h-full col-span-1 gap-5 px-6 py-8 overflow-hidden md:gap-8 md:px-8 md:py-10 bg-[#ECEAE5] rounded-3xl'>
                    <div className='flex flex-col gap-5 md:gap-8'>
                         <p className='text-black text-xs tracking-[0.1em] uppercase z-30 max-w-lg font-spacemono'>The Solution</p>
                         <h2 className='text-black text-2xl md:text-4xl z-30'>An introduction to distributed ledger technology</h2>
                    </div>
                    <p className='text-black text-sm z-30 font-spacemono'>Traditional payments take up to 30 days to settle due to a series of network banks in the SWIFT network. SWIFT was developed in 1973 - over 50 years ago. With HIFI, we have developed the OS for the money to move globally over a network of anchors across various blockchains - we call this distributed ledger technology. When you send a payment on HIFI, we detect the fastest and most-cost effective blockchain to route the transaction across. It’s the new SWIFT network - for the next chapter of the internet.</p>
               </div>   
          </div>
     )
}

export default TheSolution