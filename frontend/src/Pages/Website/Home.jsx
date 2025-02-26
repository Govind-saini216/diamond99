import React, { useEffect, useRef, useState } from "react";
import assembly from "../../../src/assests/assembly.png";
import SideMenu from "../../Components/Side_Menu";
import GameList from "./Table_List";
import Cricket from "./Game_Components/Cricket";
import Tennis from "./Game_Components/Tennis";
import Football from "./Game_Components/Football";
import HorseRacing from "./Game_Components/Horse_Racing";
import Lotter from "./Game_Components/Lotter";
import AccStatement from "../../Components/Acc_Statement";
const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the active item
    const [activeContent, setActiveContent] = useState(null);
    const itemRefs = useRef([]); // Store references to each item
    const sliderRef = useRef(null); // Reference to the slider container

    const sliderItems = [
        { name: "Politics", component: <p>Politics Content</p> },
        { name: "Cricket", component: <Cricket /> },
        { name: "Football", component: <Football /> },
        { name: "Tennis", component: <Tennis /> },
        { name: "Esoccer", component: <Football /> },
        { name: "Horse Racing", component: <HorseRacing /> },
        { name: "Greyhound Racing", component: <p>Esoccer Content</p> },
        { name: "Table Tennis", component: <p>Esoccer Content</p> },
        { name: "Basketball", component: <p>Esoccer Content</p> },
        { name: "Boxing", component: <p>Esoccer Content</p> },
        { name: "Mixed Martial Arts", component: <p>Esoccer Content</p> },
        { name: "American Football", component: <p>Esoccer Content</p> },
        { name: "Volleyball", component: <p>Esoccer Content</p> },
        { name: "Badminton", component: <p>Esoccer Content</p> },
        { name: "Snooker", component: <p>Esoccer Content</p> },
        { name: "Ice Hockey", component: <p>Esoccer Content</p> },
        { name: "E Games", component: <p>Esoccer Content</p> },
        { name: "Futsal", component: <p>Esoccer Content</p> },
        { name: "Handball", component: <p>Esoccer Content</p> },
        { name: "Snooker", component: <p>Esoccer Content</p> },
        { name: "Snooker", component: <p>Esoccer Content</p> },
    ];

    // const handleClick = (index) => {
    //     setActiveIndex(index); // Highlight the clicked item
    //     setActiveContent(sliderItems[index].component); // Update displayed content
    //     localStorage.setItem("activeIndex", index); // Save index to localStorage
    //     if (itemRefs.current[index]) {
    //         itemRefs.current[index].scrollIntoView({
    //             behavior: "smooth",
    //             block: "nearest",
    //             inline: "center",
    //         });
    //     }
    // };
    useEffect(() => {
        const savedIndex = localStorage.getItem("activeIndex");
        if (savedIndex !== null) {
            const index = parseInt(savedIndex, 10);
            setActiveIndex(index); // Restore active index
            setActiveContent(sliderItems[index].component); // Restore active content
        }
    }, []);
    // // Prevent scrolling on the slider
    // useEffect(() => {
    //     const sliderElement = sliderRef.current;

    //     const handleWheel = (e) => {
    //         // Prevent horizontal and vertical scrolling
    //         if (e.deltaY !== 0 || e.deltaX !== 0) {
    //             e.preventDefault(); // Prevent both vertical and horizontal scrolling
    //         }
    //     };

    //     if (sliderElement) {
    //         sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    //     }

    //     return () => {
    //         if (sliderElement) {
    //             sliderElement.removeEventListener("wheel", handleWheel);
    //         }
    //     };
    // }, []);
    // const transformText = (text) => {
    //     const words = text.split(" "); // Split the text into words once
    //     return words.map((word, wordIndex) => (
    //         <span key={wordIndex} className="inline-block">
    //             {word.split("").map((char, index) => {
    //                 const isLowercase = char === char.toLowerCase(); // Check if it's lowercase
    //                 const isCapitalT = char === "T"; // Check if the character is "T"
    //                 const isO = char === "o"; // Check if the character is "o"
    //                 const nextCharIsLowercase = index < word.length - 1 && word[index + 1] === word[index + 1].toLowerCase(); // Check if the next character is lowercase

    //                 // Calculate letterSpacing based on conditions
    //                 let letterSpacing = "normal";
    //                 if (isCapitalT && nextCharIsLowercase) {
    //                     letterSpacing = "-0.04em"; // Reduce space when "T" is followed by lowercase letter
    //                 } else if (isLowercase && nextCharIsLowercase) {
    //                     letterSpacing = "0.0153em"; // Reduce space between lowercase letters
    //                 }

    //                 return (
    //                     <span
    //                         key={index}
    //                         className="inline-block"
    //                         style={{
    //                             transform: isO
    //                                 ? "scaleX(1.03) scaleY(1.1) translateY(0.3px)" // Stretch "o" and move it lower
    //                                 : isLowercase
    //                                     ? "scaleY(1.05) translateY(0.3px)" // Stretch lowercase and move lower
    //                                     : "", // No transformation for uppercase
    //                             transformOrigin: "bottom", // Stretch from the bottom upwards for lowercase
    //                             letterSpacing: letterSpacing, // Apply calculated letter spacing
    //                         }}
    //                     >
    //                         {char}
    //                     </span>
    //                 );
    //             })}
    //             {/* Add a space after each word except the last one */}
    //             {wordIndex < words.length - 1 && (
    //                 <span className="inline-block">&nbsp;</span> // Non-breaking space between words
    //             )}
    //         </span>
    //     ));
    // };




    return (
        <>
            <div className=" ">
                < div className="flex">

                    <div className="  font-roboto ">
                        {/* live */}
                        <div className="grid grid-cols-5 gap-[5.6px] overflow-hidden mr-[9px] max-h-[31px] mt-[5px] ml-[5px] text-center min-h-[31px] ">
                            <div className="bg-[#2c3e50] font-bold text-white text-center ">
                                <p className="  truncate items-center grid grid-cols-5  mx-[10.6px]">

                                    <img src={assembly} className="h-[14px] w-[16.5px] opacity-  mt-[5.1px] tracking-tight" alt="" />
                                    <p className=" ml-[-10px] mt-[5.1px] gap-0 text-[13.8px] col-span-4 truncate items-center animate-[blink_1s_infinite]" style={{ letterSpacing: "0.0067em" }}>Assembly Election 2025</p>
                                </p>
                            </div>
                            <div className="bg-[#2c3e50] font-bold text-white text-center ">
                                <p className="  truncate items-center grid grid-cols-5  mx-[10.6px]">

                                    <img src={assembly} className="h-[14px] w-[16.5px] opacity-  mt-[5.1px] tracking-tight" alt="" />
                                    <p className=" ml-[-10px] mt-[5.1px] gap-0 text-[13.8px] col-span-4 truncate items-center animate-[blink_1s_infinite]" style={{ letterSpacing: "0.0067em" }}>Canterbury Kings v Northern Brave / 28/01/2025 10:25:00</p>
                                </p>
                            </div>
                            <div className="bg-[#2c3e50] font-bold text-white text-center ">
                                <p className="  truncate items-center grid grid-cols-5  mx-[10.6px]">

                                    <img src={assembly} className="h-[14px] w-[16.5px] opacity-  mt-[5.1px] tracking-tight" alt="" />
                                    <p className=" ml-[-10px] mt-[5.1px] gap-0 text-[13.8px] col-span-4 truncate items-center animate-[blink_1s_infinite]" style={{ letterSpacing: "0.0067em" }}>India v England</p>
                                </p>
                            </div>
                            <div className="bg-[#2c3e50] font-bold text-white text-center ">
                                <p className="  truncate items-center grid grid-cols-5  mx-[10.6px]">

                                    <img src={assembly} className="h-[14px] w-[16.5px] opacity-  mt-[5.1px] tracking-tight" alt="" />
                                    <p className=" ml-[-10px] mt-[5.1px] gap-0 text-[13.8px] col-span-4 truncate items-center animate-[blink_1s_infinite]" style={{ letterSpacing: "0.0067em" }}>India v England</p>
                                </p>
                            </div>

                            <div className="bg-[#2c3e50] font-bold text-white text-center ">
                                <p className="  truncate items-center grid grid-cols-5  mx-[10.6px]">

                                    <img src={assembly} className="h-[14px] w-[16.5px] opacity-  mt-[5.1px] tracking-tight" alt="" />
                                    <p className=" ml-[-10px] mt-[5.1px] gap-0 text-[13.8px] col-span-4 truncate items-center" style={{ letterSpacing: "0.0067em" }}>India v England</p>
                                </p>
                            </div>


                        </div>
                        {/* SliderList */}
                        {/* <div
                            ref={sliderRef}
                            className="flex overflow-x-auto whitespace-nowrap font-roboto scrollbar-hide ml-[5px] mt-[5px] w-screen"
                        >
                            {sliderItems.map((item, index) => (
                                <div
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    key={index}
                                    className={`relative flex items-center h-[32px] transition-all duration-[400] 
                                   ${activeIndex === index ? "bg-[#2c3e50] text-white" : "bg-[#CCCCCC] text-black"}
                               `}
                                    onClick={() => handleClick(index)}
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0",
                                        display: "inline-flex",
                                        position: "relative",
                                        borderRight: index < sliderItems.length - 1 ? "1px solid rgba(44, 62, 80, 1)" : "none",

                                    }}
                                >
                                    <p
                                        className=" pl-[16.1px] pr-[16.45px] text-[15.4px] place-content-center mt-[0.9px] font-str cursor-pointer subpixel-antialiased overflow-hidden"
                                        style={{
                                            letterSpacing: "0.0159em",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            fontWeight: "550",
                                            fontStretch: "500px",
                                        }}
                                    >
                                        {transformText(item.name)}
                                    </p>

                                    {/* Right Border for All Items except the Last One */}
                        {/* {index < sliderItems.length - 1 && (
                                        <div
                                            className={`absolute right-0 top-0 bottom-0 border-r-[1px] ${activeIndex === index ? "border-[#2c3e50]" : "border-[#2c3e50]"}`}
                                        />
                                    )} 
                                </div>
                            ))}
                        </div> */}




                    </div>

                </div>


            </div >
            {/* Display Content Dynamically */}
            < div className="mt-[-5px] " >
                {
                    activeContent ? (
                        <div className="" > {activeContent}</div>
                    ) : (
                        <p className="text-gray-500">Data Not Found</p>
                    )}
            </div >
            {/* <GameList /> */}
            <Lotter />
            {/* <AccStatement /> */}
        </>
    );
};

export default Home;
