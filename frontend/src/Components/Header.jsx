import React, { useState, useEffect } from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { TbChevronDown } from "react-icons/tb";
import { VscChevronDown } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
// import { FaChevronDown } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import searchPlus from '../assests/icon-01.svg';
import '../css/Side_menu.css'
const Header = () => {
    const [activeItem, setActiveItem] = useState("");
    const [hoveredItem, setHoveredItem] = useState(""); // To track hovered item
    const navigate = useNavigate();
    const handleClick = (item) => {
        setActiveItem(item.name);
        navigate(item.route); // Navigate to the specified route
    };



    // Reset activeItem to null when clicking anywhere on the page
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Only set activeItem to null if the click is outside of the menu
            if (!e.target.closest('.menu-item')) {
                setActiveItem(null);

            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='desktop-ui'>
                <div className='md:bg-[#0088CC] h-[79px] grid grid-cols-2  font-roboto '>
                    <div>
                        <img
                            src="https://sitethemedata.com/sitethemes/diamondexch99.com/front/logo.png"
                            className="
                                   ml-[15px]  inline-block max-w-full
                                   
                                   desktop:h-[53px] desktop:w-[250px] desktop:mt-[13px]
                                   laptopL:h-[53px] laptopL:w-[250px] laptopL:mt-[13px]
                                   h-[20px]"
                            //    laptop:h-[50px] laptop:w-[100px] laptop:mt-[9px] 



                            alt="Logo"
                        />
                    </div>
                    <div className=' flex justify-end text-white pr-[14px]  '>
                        <div className='flex items-center'>
                            <FaSearchPlus className=' size-[24.4px]  mt-[-11px] mr-[15.8px] ' />
                            {/* <img src={searchPlus} alt="" className=' h-[28.86px] w-[54px] mt-[-10.9px] mr-[px] drop-shadow-sm ' /> */}
                            <p className='font-bold mt-[-10px] pr-[24px] ' style={{ letterSpacing: "-0.0011em" }}>Rules</p>
                        </div>


                        <div className='-space-y-[5px] mt-[14px] mx-[8px] '>
                            <div >
                                <h className='text-center '>Balance:</h>
                                <h className='font-bold drop-shadow' style={{ letterSpacing: "0.0014em" }}>1500</h>
                            </div>
                            <div className=''>
                                <h className='text-center' style={{ letterSpacing: "-0.0014em" }}>Exp:</h>
                                <h className='font-bold' style={{ letterSpacing: "0.0014em" }}>0</h>
                            </div>
                        </div>
                        <div className='flex justify-center items-center ml-[8px] '>
                            <p className=' desktop:mt-[-10px] mr-[3.2px]' style={{ letterSpacing: "-0.00261em" }}>ak894</p>
                            {/* <FontAwesomeIcon icon={faChevronDown} className='desktop:size-[15.85px]  laptopL:size-[28.4px] shadow-white font-extrabold   desktop:mt-[-10.9px] laptopL:mt-[-10px] '/> */}
                            < FaChevronDown className='desktop:size-[15.85px]  laptopL:size-[28.4px] shadow-white stroke-[10]   desktop:mt-[-10.8px] laptopL:mt-[-10px] ' />
                        </div>
                    </div>
                </div>

                <div className="bg-[#2c3e50] font-bold text-[#ffffff] desktop:text-sm laptopL:text-sm h-[41px] "  >
                    <div className="flex flex-wrap font-roboto items-center ml-[14.84px]">
                        {[
                            { name: "HOME", route: "/" },
                            { name: "LOTTERY", route: "/sports-book/33" },
                            { name: "CRICKET", route: "all-sports/4" },
                            { name: "TENNIS", route: "all-sports/2" },
                            { name: "FOOTBALL", route: "all-sports/1" },
                            { name: "TABLE TENNIS", route: "all-sports/8" },
                            { name: "BACCARAT", route: "casino-list/LC/4/22" },
                            { name: "32 CARDS", route: "casino-list/LC/4/24" },
                            { name: "TEENPATTI", route: "casino-list/LC/4/20" },
                            { name: "POKER", route: "/casino-list/LC/4/21" },
                            { name: "LUCKY 7", route: "/casino-list/LC/4/27" },
                        ].map((item, index) => (
                            <p
                                key={index}
                                onClick={() => handleClick(item)}
                                onMouseEnter={() => setHoveredItem(item.name)} // Set hovered item on hover
                                onMouseLeave={() => setHoveredItem("")} // Reset hovered item on mouse leave
                                className='relative cursor-pointer transition-all group  pr-[30px] menu-item laptopL:py-[10.5px]  ' style={{ letterSpacing: "0.0003em", textShadow: "1px 0px 0px rgba(255,255,255,0.3),-0.1px 0px 0px rgba(255,255,255,0.1)" }}  //drop-shadow-[0.1px_0.1px_0.1px_rgba(255,255,255,0.2)]
                            >
                                <h className=''>{item.name}
                                </h>

                                {/* Custom Underline for HOME */}
                                {item.name === "HOME" ? (
                                    <div
                                        className={`absolute bottom-[5px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 transform -translate-x-1/2 
                             ${activeItem === "HOME" ? "w-[77%] " : ""}
                ${hoveredItem === "HOME" ? "w-[77%] translate-x-[-64%]" : "w-0 translate-x-[-64%]"}
                            `}
                                    ></div>
                                ) : (
                                    /* Default Underline for Other Items */
                                    <div
                                        className={`absolute bottom-[5px] left-[48.8%] w-0 h-[2px] ml-[-14.9px] bg-white transition-all duration-300 transform -translate-x-[49%]  
                            ${activeItem === item.name ? "w-[calc(100%+0.4%)] bg-white" : "group-hover:w-[calc(100%+0.4%)]"}`}
                                    ></div>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            {/* 
         <div className='mobile-ui'>
         <div className='bg-[#0000CC] h-[79px] grid grid-cols-2  font-roboto '>
             <div>
                 <img
                     src="https://sitethemedata.com/sitethemes/diamondexch99.com/front/logo.png"
                     className="
                                ml-[15px]  inline-block max-w-full
                                
                                desktop:h-[53px] desktop:w-[250px] desktop:mt-[13px]
                                laptopL:h-[53px] laptopL:w-[250px] laptopL:mt-[13px]
                                h-[20px]"
                             //    laptop:h-[50px] laptop:w-[100px] laptop:mt-[9px] 
                             

                                
                     alt="Logo"
                 />
             </div>
             <div className=' flex justify-end text-white pr-[14px]  '>
                <div className='flex items-center'>
                    <FaSearchPlus className=' size-[24.4px]  mt-[-11px] mr-[15.8px] ' />
                    {/* <img src={searchPlus} alt="" className=' h-[28.86px] w-[54px] mt-[-10.9px] mr-[px] drop-shadow-sm ' /> 
                    <p className='font-bold mt-[-10px] pr-[24px] 'style={{ letterSpacing: "-0.0011em" }}>Rules</p>
                 </div>
                

                 <div className='-space-y-[5px] mt-[14px] mx-[8px] '>
                     <div > 
                         <h className='text-center '>Balance:</h>
                         <h className='font-bold drop-shadow'style={{ letterSpacing: "0.0014em" }}>1500</h>
                     </div>
                     <div className=''> 
                         <h className='text-center'style={{ letterSpacing: "-0.0014em" }}>Exp:</h>
                         <h className='font-bold' style={{ letterSpacing: "0.0014em" }}>0</h>
                     </div>
                 </div>
                 <div className='flex justify-center items-center ml-[8px] '>
                     <p className=' desktop:mt-[-10px] mr-[3.2px]'style={{ letterSpacing: "-0.00261em" }}>ak894</p>
                     <FontAwesomeIcon icon={faChevronDown} className='desktop:size-[15.85px]  laptopL:size-[28.4px] shadow-white font-extrabold   desktop:mt-[-10.9px] laptopL:mt-[-10px] '/> 
                     < FaChevronDown className='desktop:size-[15.85px]  laptopL:size-[28.4px] shadow-white stroke-[10]   desktop:mt-[-10.8px] laptopL:mt-[-10px] '/>
                 </div>
             </div>
         </div>

         <div className="bg-[#2c3e50] font-bold text-[#ffffff] desktop:text-sm laptopL:text-sm h-[41px] "  >
         <div className="flex flex-wrap font-roboto items-center ml-[14.84px]">
         {[
             { name: "HOME", route: "/" },
             { name: "LOTTERY", route: "/sports-book/33" },
             { name: "CRICKET", route: "all-sports/4" },
             { name: "TENNIS", route: "all-sports/2" },
             { name: "FOOTBALL", route: "all-sports/1" },
             { name: "TABLE TENNIS", route: "all-sports/8" },
             { name: "BACCARAT", route: "casino-list/LC/4/22" },
             { name: "32 CARDS", route: "casino-list/LC/4/24" },
             { name: "TEENPATTI", route: "casino-list/LC/4/20" },
             { name: "POKER", route: "/casino-list/LC/4/21" },
             { name: "LUCKY 7", route: "/casino-list/LC/4/27" },
         ].map((item, index) => (
             <p
             key={index}
             onClick={() => handleClick(item)}
             onMouseEnter={() => setHoveredItem(item.name)} // Set hovered item on hover
             onMouseLeave={() => setHoveredItem("")} // Reset hovered item on mouse leave
             className='relative cursor-pointer transition-all group  pr-[30px] menu-item laptopL:py-[10.5px]  'style={{ letterSpacing: "0.0003em",textShadow:"1px 0px 0px rgba(255,255,255,0.3),-0.1px 0px 0px rgba(255,255,255,0.1)"  }}  //drop-shadow-[0.1px_0.1px_0.1px_rgba(255,255,255,0.2)]
         >
             <h className=''>{item.name}
             </h>
             
             {/* Custom Underline for HOME 
             {item.name === "HOME" ? (
                 <div
                     className={`absolute bottom-[5px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 transform -translate-x-1/2 
                          ${activeItem === "HOME" ? "w-[77%] " : ""}
             ${hoveredItem === "HOME" ? "w-[77%] translate-x-[-64%]" : "w-0 translate-x-[-64%]"}
                         `}
                 ></div>
             ) : (
                 /* Default Underline for Other Items 
                 <div
                     className={`absolute bottom-[5px] left-[48.8%] w-0 h-[2px] ml-[-14.9px] bg-white transition-all duration-300 transform -translate-x-[49%]  
                         ${activeItem === item.name ? "w-[calc(100%+0.4%)] bg-white" : "group-hover:w-[calc(100%+0.4%)]"}`}
                 ></div>
             )}
         </p>
         ))}
     </div>
         </div>
     </div> */}
        </>
    );
};

export default Header;
