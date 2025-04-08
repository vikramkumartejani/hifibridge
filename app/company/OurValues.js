'use client'
import { useRef, useState } from 'react';

const OurValues = () => {
     const faqs = [
          {
               id: 1,
               question: "Clear transparency",
               answer: "Hifi is a payment platform that allows you to accept payments from your customers."
          },
          {
               id: 2,
               question: "Privacy and security centered",
               answer: "Our customer’s data and privacy will always be our top priority. We firmly believe in our customers' right to data privacy, and we fully commit to safeguarding it. Utilizing top preventive measures, we actively mitigate data security risks. We aim to serve as a symbol of trust and reliability for best security practices in the new financial world."
          },
          {
               id: 3,
               question: "Humans first",
               answer: "Everyone deserves a fair share. We listen to our customers and create our products with the intention that they will help the lives of people everyday. We know our products will be used by real humans, each with their own unique lives, thoughts and feelings. Our products are built with empathy to be accessible by everyone, everywhere."
          },
          {
               id: 4,
               question: "Think big, do bigger",
               answer: "We have big ambitious plans and believe no goal is ever out of reach. We reward big, bold bets and comprise ourselves of a stellar team of dreamers and doers. We take a ‘zero-to-one’ approach and believe the most disruptive tech in the world all starts with just an idea and the firm belief it can be built into something life changing."
          },
     ];

     const [openFaqs, setOpenFaqs] = useState({});

     const toggleFaq = (id) => {
          setOpenFaqs(prev => ({
               ...prev,
               [id]: !prev[id]
          }));
     };
     return (
          <div className='grid w-full h-full grid-cols-1 md:grid-cols-3 '>
               <div className='relative flex flex-col justify-between col-span-1 gap-8 px-2 py-8 overflow-hidden md:h-full md:px-8 md:py-10 rounded-3xl'>
                    <div className='flex flex-col gap-5 md:gap-8'>
                         <p className='text-black text-xs tracking-[0.1em] uppercase z-30 max-w-lg font-spacemono'>Our Values</p>
                         <h3 className='text-black text-2xl md:text-4xl z-30 max-w-lg'>We Believe</h3>
                         <p className='text-black text-sm z-30 font-spacemono'>At HiFi, we respect the visionaries that came before us - however, we are taking a radically different approach than those that built the world of big tech and traditional finance. We understand that the path to building a redefined financial future for everyone starts with values we bake into our work every day.</p>
                    </div>
               </div>
               <div className='flex flex-col items-end justify-end w-full h-full col-span-2'>
                    <div className='w-full max-w-3xl'>
                         {/* Faq */}
                         <div className='flex flex-col'>
                              {faqs.map((faq) => {
                                   const isOpen = !!openFaqs[faq.id];

                                   return (
                                        <div key={faq.id} className='group bg-white border-[#eceae5] border rounded-3xl first:mt-0 mt-[-1px] px-5 py-5 md:px-8 md:py-10'>
                                             <button
                                                  onClick={() => toggleFaq(faq.id)}
                                                  className='flex items-center justify-between w-full text-left text-gray-800 transition-colors duration-200 cursor-pointer'
                                             >
                                                  <h4 className='text-black text-xl md:text-2xl'>{faq.question}</h4>
                                                  <div className='flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg transition-all duration-300 bg-[#eceae5] group-hover:bg-[#f2ff66]'>
                                                       <div className="transition-transform duration-300" style={{
                                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                                       }}>
                                                            <svg
                                                                 className="w-4 h-4 text-black md:w-6 md:h-6"
                                                                 focusable="false"
                                                                 aria-hidden="true"
                                                                 viewBox="0 0 24 24"
                                                            >
                                                                 <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"></path>
                                                            </svg>
                                                       </div>
                                                  </div>
                                             </button>

                                             <div
                                                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                             >
                                                  <div className="max-w-2xl py-3">
                                                       <p className="text-black text-sm font-spacemono">{faq.answer}</p>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OurValues