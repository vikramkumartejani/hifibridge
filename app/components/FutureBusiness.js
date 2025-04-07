import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FutureBusiness = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-[80vh]'>
               <div className='relative flex flex-col justify-between h-full min-h-[250px] col-span-1 gap-8 px-6 py-8 overflow-hidden md:px-8 md:py-10 bg-[#406354] rounded-3xl'>
                    <div className='flex flex-col gap-3 md:gap-8'>
                         <h3 className='text-2xl md:text-4xl z-30 max-w-lg text-white'>The future of business is default global</h3>
                         <p className='text-sm z-30 text-white font-spacemono'>The modern infrastructure to integrate stablecoins into global payment flows.</p>
                    </div>
                    <Link href='/contact'>
                         <button className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group'>
                              <p className='text-black text-xs tracking-[0.1em] uppercase font-spacemono'>Start A Payment</p>
                              <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 ">
                                   <Image src='/assets/icons/arrow_outward.svg' alt="arrow_outward" width={10} height={10} />
                              </div>
                         </button>
                    </Link>
               </div>

               <div className='grid h-full grid-cols-1 col-span-2 bg-white md:grid-cols-2'>
                    <div className='col-span-1 first:mt-0 mt-[-1px] '>
                         <div className='relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/NoDelays.svg' alt='NoDelays' width={40} height={40} />
                              <h4 className='text-black text-xl md:text-2xl'>No delays</h4>
                              <p className='text-black text-sm font-spacemono'>Reduce settlement time from days to seconds. Experience faster access to funds and improved cash flow.</p>
                         </div>
                    </div>
                    <div className='col-span-1 first:mt-0 mt-[-1px] '>
                         <div className='relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/GlobalPayments.svg' alt='GlobalPayments' width={40} height={40} />
                              <h4 className='text-black text-xl md:text-2xl'>Global payments</h4>
                              <p className='text-black text-sm font-spacemono'>Seamlessly execute cross-border payments, to reach suppliers, partners, and customers around the world.</p>
                         </div>
                    </div>
                    <div className='col-span-1 first:mt-0 mt-[-1px] '>
                         <div className='relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/ReduceCosts.svg' alt='ReduceCosts' width={40} height={40} />
                              <h4 className='text-black text-xl md:text-2xl'>Reduce costs</h4>
                              <p className='text-black text-sm font-spacemono'>Benefit from near zero cost transactions, reducing overhead expenses and optimizing your financial operations.</p>
                         </div>
                    </div>
                    <div className='col-span-1 first:mt-0 mt-[-1px] '>
                         <div className='relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/MinimizeFraud.svg' alt='MinimizeFraud' width={40} height={40} />
                              <h4 className='text-black text-xl md:text-2xl'>Minimize fraud</h4>
                              <p className='text-black text-sm font-spacemono'>Leverage real time monitoring to prevent fraudulent activity before it can impact your operations.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default FutureBusiness