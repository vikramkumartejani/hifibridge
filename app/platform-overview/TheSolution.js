import React from 'react'

const TheSolution = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-[80vh]'>
               <div className='relative col-span-2 rounded-[30px] overflow-hidden min-h-[400px]'>
                    <video src="/assets/Basketball-Court.mp4" className='absolute object-cover w-full h-full' muted autoPlay loop playsInline ></video>
               </div>
               <div className='relative flex flex-col justify-between h-full col-span-1 gap-5 px-6 py-8 overflow-hidden md:gap-8 md:px-8 md:py-10 bg-platinum rounded-3xl'>
                    <div className='flex flex-col gap-5 md:gap-8'>
                         <p className='text-black text-xs tracking-[0.1em] uppercase z-30 max-w-lg'>The Solution</p>
                         <h2 className='text-black text-2xl md:text-4xl z-30'>An introduction to distributed ledger technology</h2>
                    </div>
               </div>   
          </div>
     )
}

export default TheSolution