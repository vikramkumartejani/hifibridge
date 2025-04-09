import React from 'react'

const Form = () => {
     return (
          <div className="bg-[#C0B395] relative h-full w-full items-center justify-center px-5 py-8 md:p-8 col-span-3 rounded-[10px] md:rounded-[30px] overflow-hidden flex">
               <form className="flex items-center justify-center w-full h-full space-y-[18px] flex-col">
                    <div className="flex items-start flex-col gap-1.5 w-full">
                         <label className="text-[#191314] text-xs font-spacemono">FULL NAME<span className="text-[#ff0000]">*</span></label>
                         <input type="text" placeholder="Your full name" className="border border-[#cbd6e2] rounded-[15px] w-full px-[15px] bg-[#f5f8fa] outline-none h-[40px] focus:border-[#52a8eccc]" />
                    </div>
                    <div className="flex items-start flex-col gap-1.5 w-full">
                         <label className="text-[#191314] text-xs font-spacemono">EMAIL<span className="text-[#ff0000]">*</span></label>
                         <input type="gmail" placeholder="Your email" className="border border-[#cbd6e2] rounded-[15px] w-full px-[15px] bg-[#f5f8fa] outline-none h-[40px] focus:border-[#52a8eccc]" />
                    </div>
                    <div className="flex items-start flex-col gap-1.5 w-full">
                         <label className="text-[#191314] text-xs font-spacemono">COMPANY URL<span className="text-[#ff0000]">*</span></label>
                         <input type="gmail" placeholder="Your company website" className="border border-[#cbd6e2] rounded-[15px] w-full px-[15px] bg-[#f5f8fa] outline-none h-[40px] focus:border-[#52a8eccc]" />
                    </div>
                    <div className="flex items-start flex-col gap-1.5 w-full">
                         <label className="text-[#191314] text-xs font-spacemono">COUNTRY / REGION<span className="text-[#ff0000]">*</span></label>
                         <select className="border border-[#cbd6e2] rounded-[15px] w-full px-[15px] bg-[#f5f8fa] outline-none h-[40px] focus:border-[#52a8eccc]">
                              <option>Africa</option>
                              <option>Asia</option>
                              <option>Europe</option>
                              <option>LatAm</option>
                              <option>Middle East</option>
                              <option>United Kingdon</option>
                              <option>United States</option>
                              <option>Other</option>
                         </select>
                    </div>
                    <div className="flex items-start flex-col gap-1.5 w-full">
                         <label className="text-[#191314] text-xs font-spacemono">ESTIMATED MONTHLY VOLUME<span className="text-[#ff0000]">*</span></label>
                         <select className="border border-[#cbd6e2] rounded-[15px] w-full px-[15px] bg-[#f5f8fa] outline-none h-[40px] focus:border-[#52a8eccc]">
                              <option>$250K - $1M</option>
                              <option>$1M - $5M</option>
                              <option>$5M - $15M</option>
                              <option>$15M - $30M</option>
                              <option>$30M - $75M</option>
                              <option>$75M - $100M</option>
                         </select>
                    </div>
                    <div className="flex items-start flex-col gap-1.5 w-full">
                         <label className="text-[#191314] text-xs font-spacemono">READY TO MOVE MONEY?<span className="text-[#ff0000]">*</span></label>
                         <select className="border border-[#cbd6e2] rounded-[15px] w-full px-[15px] bg-[#f5f8fa] outline-none h-[40px] focus:border-[#52a8eccc]">
                              <option>1 Month</option>
                              <option>1 Month - 3 Months</option>
                              <option>3 Months - 6 Months</option>
                         </select>
                    </div>

                    <div className="flex items-start justify-items-start w-full py-5">
                         <button className="bg-[#F2FF66] py-3 px-6 font-spacemono text-xs leading-[12px] text-[#191314] font-bold rounded-[14px]">Submit</button>
                    </div>
               </form>
          </div>
     )
}

export default Form