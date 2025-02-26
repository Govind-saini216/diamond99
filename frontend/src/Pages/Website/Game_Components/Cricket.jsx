import React from 'react';
import fi from '../../../assests/ic_fancy.png';
import ib from '../../../assests/ic_bm.png';
import tv from '../../../assests/ic_tv (2).png';
import { Link } from 'react-router-dom';
import { useCricketContext } from '../../../Context/Cric_Context';  // Import the context hook


const Cricket = () => {
    const { matchDetails } = useCricketContext();
    console.log(matchDetails);
    
    // const matches = [
    //     { name: "Ball by Ball " },
    //     { name: "South Australian Scorpions v Queensland Fire", time: "" },
    //     { name: "Sri Lanka v Australia", time: "06/02/2025 10:00:00" },
    //     { name: "Border v Limpopo / 30/01/2025 13:30:00", time: "" },
    //     { name: "Chittagong Kings v Sylhet Strikers / 30/01/2025 18:00:00", time: "" },
    //     { name: "Sharjah Warriors v Abu Dhabi Knight Riders / 30/01/2025 20:00:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },
    //     // { name: "India T10 v West Indies T10 / 30/01/2025 20:25:00", time: "" },

    // ];

    // Grouping matches into pairs
    // const groupedMatches = [];
    // for (let i = 0; i < matches.length; i += 2) {
    //     groupedMatches.push(matches.slice(i, i + 2));
    // }


    return (
        <div className="bg-[#f2f2f2] ml-[5.5px] mr-[5px] mt-[9px] font-roboto">
            <div className="w-full">
                <hr className="border-t-1 border-[#CCCCCC]" />
                {/* Fixed Header */}
                <div className="grid grid-cols-12 bg-[#F7F7F7] relative">
                    <div className="text-[14.111px] pt-[5.1px] mb-[4.5px] pl-[4.3px] col-span-7" style={{ letterSpacing: "0.001em", fontWeight: "650" }}>
                        <p>Game</p>
                    </div>
                    <div className="grid grid-cols-3 col-span-5 text-center place-content-center font-bold text-[14.111px]">
                        <p className="text-center ml-[98.4px] ">1</p>
                        <p className="ml-[59px]">X</p>
                        <p className="ml-[20px]">2</p>
                    </div>
                </div>
                <hr className="border-t-1 border-[#CCCCCC]" />

                {/* Matches Row by Row */}
                {/* {matches.map((matchPair, index) => (
                    <div key={index} className="border-[#CCCCCC]">
                        {/* Main Grouped Row 
                        <div className="h-[46.7px] flex flex-col justify-between"> */}
                            {matchDetails.map((match, subIndex) => (
                                <div key={subIndex} className={`grid grid-cols-12 items-center`}>
                                    {/* Left Side Content (Match Details) */}
                                    <div className={`col-span-6 flex items-center text-[#2c3e50] h-[23px]`} style={{ letterSpacing: "-0.0047em" }}>
                                        <p className={`text-[14.2px] pl-[4.3px] truncate cursor-pointer `}>
                                            <Link to={`/game-details/4/${match.matchId}`} state={{ match }} className="cursor-pointer">
                                                {match.matchName}
                                            </Link>
                                        </p>
                                    </div>
                                  

                                    {/* Right Side Content (Betting Odds) */}
                                    <div className="grid grid-cols-9 col-span-6 text-center ">
                                        <div className="flex col-span-3 ml-[-23px]">
                                            <span className={`bg-[#28A745] inline-block w-3 h-3  rounded-full ${subIndex % 2 !== 0 ? 'mt-[.1px]' : 'mt-[1.1px]'}`}></span>
                                            <img src={tv} alt="" className={` mx-[21px]  w-[16px] mt-[.6px] ${subIndex % 2 !== 0 ? ' h-[14px] ' : ' h-[14.45px]  '}`} />
                                            <img src={fi} alt="" className={` h-[12.09px] w-[17.3px]  ml-[-2.25px] ${subIndex % 2 !== 0 ? ' mt-[1.8px] ' : ' mt-[1.3px]  '} `} />
                                            <img src={ib} alt="" className={` h-[12.09px] w-[18.1px] ml-[17px]${subIndex % 2 !== 0 ? ' mt-[1.8px] ' : ' mt-[1.3px]'}`} />
                                        </div>
                                        <div className='col-span-6 grid grid-cols-6 ml-[-28px] font-bold text-[#2c3e50] text-[14px]'>
                                            <div className="bg-[#72BBEF] place-content-center ">6.8</div>
                                            <p className="bg-[#FAA9BA] place-content-center ">7.4</p>
                                            <p className="bg-[#72BBEF] place-content-center ">-</p>
                                            <p className="bg-[#FAA9BA] place-content-center ">-</p>
                                            <p className="bg-[#72BBEF] place-content-center ">-</p>
                                            <p className="bg-[#FAA9BA] place-content-center  border-r">-</p>
                                        </div>
                                    </div>
                                    <hr className="border-t-1 border-[#CCCCCC] col-span-full w-full  " />
                                    {/* Render the horizontal line after each match pair except the last one when odd number of matches */}
                                    {/* {subIndex % 2 === 0 && (
                                        <hr className="border-t-1 border-[#CCCCCC] col-span-full w-full  absolute z-10  mt-[24px]" />
                                    )} */}
                                </div>
                            ))}
                        {/* </div>

                        {/* Only render hr for group when there's a pair (avoid adding for the last unpaired match) 
                        {matchPair.length === 2 && <hr className="border-t-1 border-[#CCCCCC] relative z-10" />}
                    </div>

                ))} */}
                {/*Odd Number Match */}
                {/* {matches.length % 2 !== 0 && (
                    <hr className="border-t-1 border-[#CCCCCC] col-span-full w-full mt-[-23.5px]" />
                )} */}
            </div>
        </div>

    );
};

export default Cricket;
