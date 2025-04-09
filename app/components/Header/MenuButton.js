"use client"

export const MenuButton = ({ isOpen, onClick }) => {
     return (
          <button
               className="z-10 flex items-center justify-center w-12 h-12 transition-transform cursor-pointer"
               onClick={onClick}
          >
               <div className="relative flex flex-col w-8 gap-[4px]">
                    <span
                         className="w-full absolute h-[1px] z-10 bg-black transition-all duration-300"
                         style={{
                              left: "50%",
                              willChange: "transform",
                              ...(isOpen
                                   ? {
                                        top: "0px",
                                        transform: "translateX(-50%) translateY(-50%) rotate(30deg)",
                                   }
                                   : {
                                        top: "-4px",
                                        transform: "translateX(-50%) translateY(-50%)",
                                   }),
                         }}
                    />
                    <span
                         className="w-full absolute h-[1px] z-10 bg-black transition-all duration-300"
                         style={{
                              left: "50%",
                              top: "0px",
                              willChange: "transform",
                              transform: "translateX(-50%) translateY(-50%)",
                              opacity: isOpen ? 0 : 1,
                         }}
                    />
                    <span
                         className="w-full absolute h-[1px] z-10 bg-black transition-all duration-300"
                         style={{
                              left: "50%",
                              willChange: "transform",
                              ...(isOpen
                                   ? {
                                        bottom: "0px",
                                        transform: "translateX(-50%) translateY(50%)",
                                        opacity: 0,
                                   }
                                   : {
                                        bottom: "-4px",
                                        transform: "translateX(-50%) translateY(50%)",
                                        opacity: 1,
                                   }),
                         }}
                    />
                    <span
                         className="w-full absolute h-[1px] z-10 bg-black transition-all duration-300"
                         style={{
                              left: "50%",
                              willChange: "transform",
                              ...(isOpen
                                   ? {
                                        bottom: "0px",
                                        transform: "translateX(-50%) translateY(50%) rotate(-30deg)",
                                   }
                                   : {
                                        bottom: "-8px",
                                        transform: "translateX(-50%) translateY(50%)",
                                   }),
                         }}
                    />
               </div>
          </button>
     )
}
