import Image from "next/image";
import Form from "./Form";

export const metadata = {
     title: 'Contact | HIFI',
     description: 'Learn more about what we do.',
};

export default function ContactUS() {
     return (
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <div className="grid items-center w-full h-auto gap-0 md:min-h-[calc(100vh-164px)] md:max-h-[960px] grid-cols-1 md:grid-cols-7">
                    <div className="flex flex-col h-full justify-center w-full rounded-[30px] bg-[#F2FF66] py-8 px-5 lg:py-32 lg:px-28 gap-4 md:gap-8 col-span-4">
                         <div className="flex items-center gap-2">
                              <div className="relative flex items-center justify-center flex-none transition-all duration-300 bg-black rounded-md w-7 h-7 group-hover:bg-[#F2FF66]">
                                   <div className="relative w-4 h-4">
                                        <Image src='/assets/icons/contact-hifi.svg' alt="contact-hif" width={16} height={16} />
                                   </div>
                              </div>
                              <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">Get Started</p>
                         </div>
                         <h2 className="text-black text-4xl leading-4xl md:text-5xl md:leading-5xl">Ready to modernize your payments?</h2>
                         <p className="text-black text-sm pb-12 font-spacemono">Let's get there together. Book a time to meet with our team for a HIFI Demo.</p>
                         <div className="md:hidden block">
                              <Form />
                         </div>
                    </div>

                    {/* Form */}
                    <div className="min-w-full w-full max-w-full hidden md:block">
                         <Form />
                    </div>
               </div>

               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>

               <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-[80vh]">
                    <div className="relative flex flex-col justify-between h-[450px] md:h-full col-span-1 gap-8 px-6 py-8 md:px-8 md:py-10 overflow-hidden  rounded-3xl">
                         <div className="absolute top-[50%] left-[50%] z-30" style={{ transform: "translate(-50%, -50%)" }}>
                              <Image src='/assets/icons/contact-icon.svg' alt="contact-icon" width={80} height={80} />
                         </div>
                         <video src='/assets/ocean.mp4' autoPlay muted loop playsInline className="absolute top-0 left-0 z-10 object-cover w-full h-full" />
                    </div>

                    <div className="grid h-full grid-cols-1 col-span-2 bg-white md:grid-cols-2">
                         <div className="col-span-1 mt-[-1px]">
                              <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4">
                                   <img src="/assets/icons/Contact-InstantIntegration.svg" alt="Instant integration, infinite flexibility" loading="lazy" width={40} height={40} />
                                   <h4 className="text-black text-xl md:text-2xl">Instant integration, infinite flexibility</h4>
                                   <p className="text-black text-sm font-spacemono">Step into the future with a cutting-edge payments stack sculpted for industry leading businesses.</p>
                              </div>
                         </div>
                         <div className="col-span-1 mt-[-1px]">
                              <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4">
                                   <img src="/assets/icons/Contact-UnlockGrowth.svg" alt="Contact-UnlockGrowth" loading="lazy" width={40} height={40} />
                                   <h4 className="text-black text-xl md:text-2xl">Unlock next-gen payments growth </h4>
                                   <p className="text-black text-sm font-spacemono">Accelerate your operations and watch your revenue growth soar with a reimagined payments stack.</p>
                              </div>
                         </div>
                         <div className="col-span-1 mt-[-1px]">
                              <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4">
                                   <img src="/assets/icons/Contact-LeverageCommerce.svg" alt="Contact-LeverageCommerce" loading="lazy" width={40} height={40} />
                                   <h4 className="text-black text-xl md:text-2xl">Leverage the future of commerce</h4>
                                   <p className="text-black text-sm font-spacemono">Leverage our multi-wallet system and reach millions of new customers.</p>
                              </div>
                         </div>
                         <div className="col-span-1 mt-[-1px]">
                              <div className="relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border border-[#ECEAE5] rounded-3xl group gap-4">
                                   <img src="/assets/icons/Contact-BuiltInCore.svg" alt="Instant integration, infinite flexibility" loading="lazy" width={40} height={40} />
                                   <h4 className="text-black text-xl md:text-2xl">Built-in security at the core</h4>
                                   <p className="text-black text-sm font-spacemono">Advanced security measures combined with rigorous compliance reporting to ensure safety in every transaction.</p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>
          </div>
     );
}
