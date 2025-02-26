import React, { useEffect, useRef, useState } from "react";
import tv from '../../../assests/ic_tv (2).png'
const HorseRacing = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to the first item
    const [activeContent, setActiveContent] = useState(null);
    const itemRefs = useRef([]); // Store references to each item
    const sliderRef = useRef(null); // Reference to the slider container

    const sliderItems = [
        { name: "FR", component: <Cricket country="IE" /> },
        { name: "GB", component: <Cricket country="GB" /> },
        { name: "ZA", component: <Cricket country="ZA" /> },
        { name: "FR", component: <Cricket country="FR" /> },
        { name: "IN", component: <Cricket country="IN" /> },
    ];


    const handleClick = (index) => {
        setActiveIndex(index); // Highlight the clicked item
        setActiveContent(sliderItems[index]?.component || <p>No content available</p>); // Handle missing content gracefully
        localStorage.setItem("activeIndex", index); // Save index to localStorage
        if (itemRefs.current[index]) {
            itemRefs.current[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };

    useEffect(() => {
        // Restore active tab from localStorage
        const savedIndex = localStorage.getItem("activeIndex");
        if (savedIndex !== null) {
            const index = parseInt(savedIndex, 10);
            setActiveIndex(index);
            setActiveContent(sliderItems[index]?.component || <p>No content available</p>);
        } else {
            // Set default tab if none is saved
            setActiveContent(sliderItems[0].component);
        }
    }, []);

    return (
        <div>
            {/* Slider Items */}
            <div
                ref={sliderRef}
                className="flex overflow-x-auto whitespace-nowrap font-roboto scrollbar-hide ml-[7px] mt-[5px] w-[1391.5px] "
            >
                {sliderItems.map((item, index) => (
                    <div
                        ref={(el) => (itemRefs.current[index] = el)}
                        key={index}
                        className={`flex h-[43px] transition-all duration-[400] ${index === sliderItems.length - 1 ? "" : "border-r"
                            } border-[#2c3e50] px-[21.4px] ${activeIndex === index ? "bg-[#2c3e50] text-white" : "bg-[#CCCCCC] text-black"
                            }`}

                        onClick={() => handleClick(index)}
                        style={{
                            WebkitTextStroke: "0.417px ",

                        }}
                    >
                        <p className="text-[20.2px] place-content-center tracking-customWide2 cursor-pointer">{item.name}</p>

                    </div>
                ))}
            </div>


            {/* Display Content Dynamically */}
            <div className="mb-8 ml-[7px] mr-[6px]">
                {activeContent ? (
                    <div>{activeContent}</div>
                ) : (
                    <p className="text-gray-500">No content found</p>
                )}
            </div>

        </div>
    );
};

export default HorseRacing;

// const Cricket = () => {
//     return (
//         <div>
//             <div className="bg-[#F2F2F2] font-roboto grid grid-cols-11">
//                 <div className="col-span-4 flex text-[#2c3e50]  pt-[15px] pb-[13px]">
//                     <img src={tv} alt="" className="h-[18.95px]  w-[21.3px] ml-[15px] mt-[7.5px]  " />
//                     <p className=" text-[18.75px] ml-[12.6px] mt-[5px] "> Gowran Park</p>
//                 </div>
//                 <div className="  col-span-7 text-center flex gap-[6px]">
//                     <div className="bg-[#CCCCCC] rounded-md w-[74.1px]   my-[8px] ml-[38px]">
//                         <p className=" text-[21px] text-center py-[6.9px] tracking-customWide ml-[-0.5px] ">18:33</p>
//                     </div>
//                     <div className="bg-[#CCCCCC] rounded-md w-[74.1px] my-[8px] block">
//                         <p className=" text-[21px] text-center py-[6.9px] tracking-customWide ml-[-0.5px] ">19:08</p>
//                     </div>

//                 </div>

//             </div>
//             <hr className='border-t-1 border-[#CCCCCC]' />
//         </div>
//     );
// };

const Cricket = ({ country }) => {
    const allData = [
        { country: "FR", event: "Deauville", time: "18:33,11:00" },
        { country: "FR", event: "Pau", time: "14:00,16:00" },
        { country: "GB", event: "Event 1 - Great Britain", time: "19:08" },
        { country: "GB", event: "Event 2 - Great Britain", time: "20:30" },
        { country: "ZA", event: "Event 1 - South Africa", time: "20:00" },

        { country: "IN", event: "Event 1 - India", time: "22:00" },
        { country: "IN", event: "Event 2 - India", time: "23:30,01:00" },
    ];

    // Filter data based on the selected country
    const filteredData = allData.filter((item) => item.country === country);

    return (
        <div>
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div key={index}>
                        <div className="bg-[#F2F2F2] font-roboto grid grid-cols-11">
                            <div className="col-span-4 flex text-[#2c3e50] pt-[15px] pb-[13px]">
                                <img src={tv} alt="" className="h-[18.95px] w-[21.3px] ml-[15px] mt-[7.5px]" />
                                <p className="text-[18.75px] ml-[12.6px] mt-[5px]">{item.event}</p>
                            </div>
                            <div className="col-span-7 text-center flex gap-[6px]">
                                {/* Split the time string by commas and display each time in a flex container */}
                                {item.time.split(',').map((time, idx) => (
                                    <div key={idx} className="bg-[#CCCCCC] rounded-md w-[74.1px] my-[8px] ml-[38px]">
                                        <p className="text-[21px] text-center py-[6.9px] tracking-customWide ml-[-0.5px]">
                                            {time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className="border-t-1 border-[#CCCCCC]" />
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No events available for {country}</p>
            )}
        </div>
    );
};