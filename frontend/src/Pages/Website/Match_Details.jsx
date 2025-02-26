import React from 'react';
import { useLocation } from "react-router-dom";
import RightMenu from '../../Components/Right_menu';

const MatchDetails = () => {
    const location = useLocation();
    const match = location.state?.match; // 👈 Retrieving data

    if (!match) {
        return <p>No match data available.</p>;
    }

    return (
        <div className=' w-full max-w-screen overflow-x-hidden'>
            <div className='flex justify-between  font-roboto '>
                <div className='flex-1 border'>
                    <div className='bg-[#2c3e50] h-[32px] text-white font-bold'>
                        <div className='mx-[10px] flex justify-between mt-[40px]'>
                            <p className=' text-[15px] mt-[5px]'>{match.matchName.toUpperCase()}  </p>    {/* 👈 Convert to uppercase */}
                            <div className='flex'> <p className='text-[15px] mr-[0.5px] mt-[5px]'>{match.date}</p>
                                <p className='text-[15px] mr-[0.5px] mt-[5px]'>{match.time}</p></div>

                        </div>
                    </div>

                    <div>
                        <div className='bg-[#4A5A69] mt-[8px] h-[33px] text-white font-bold'>
                            <div className='mx-[10px] flex justify-between'>
                                <p className=' text-[15px] mt-[5.8px]'>MATCH_ODDS </p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-2 gap-[24px] bg-[#F6F6F6]'>
                            <div className='h-[28px]  cursor-pointer '>
                                <p className='text-[12px] m-[5px] font-bold text-[#097C93]'>Max: 1.00</p>
                            </div>
                            <div className='h-[28px] flex cursor-pointer font-bold text-[#333333]  ' style={{ letterSpacing: "0.005em" }}>

                                <div className=' bg-[#72BBEF] ml-[112px] flex '>
                                    <div className="w-[0.5px] h-full bg-[#CCCCCC]"></div>
                                    <h1 className='my-[2px] w-[54.1px] text-center ml-[-0.3px]'>Back</h1>
                                </div>
                                <div className="w-[0.5px] h-full bg-[#CCCCCC]"></div>
                                <div className=' bg-[#FAA9BA]     '>
                                    <h1 className='my-[2px] w-[55px] text-center'>Lay</h1>
                                </div>
                                <div className="w-[0.5px] h-full bg-[#CCCCCC]"></div>
                            </div>

                        </div>
                        <hr className="border-t-1 border-[#CCCCCC] " />
                        <div className='grid grid-cols-2 gap-[28.7px] h-[44px]  bg-[#F2F2F2] text-[#333333] '>
                            <div className=''>Sri Lanka</div>

                            <div className=' cursor-pointer grid grid-cols-6  '>

                                <div className=' bg-[#B2D6F0] border-[#CCCCCC]  border-r-[1px] border-l text-center ml-[-0.8px]'>
                                    <p className='mt-[2.5px] font-bold'>3.2</p>
                                    <p className=' font-thin text-[12px] mt-[-4px]' style={{ fontWeight: "" }}>203.59</p>
                                </div>
                                <div className=' bg-[#92C9F0] border-[#CCCCCC]   border-r  '></div>
                                <div className=' bg-[#72BBEF]  border-[#CCCCCC]  border-r  '></div>
                                <div className=' bg-[#FAA9BA] border-[#CCCCCC]   border-r  '></div>
                                <div className=' bg-[#F8BCC8] border-[#CCCCCC]   border-r  '></div>
                                <div className=' bg-[#F6CDD6] border-[#CCCCCC]   border-r  '></div>
                            </div>

                        </div>
                        <hr className="border-t-1 border-[#CCCCCC] " />
                        <div>

                        </div>

                    </div>


                </div>

                {/* Right Menu */}
                <div className='bg-[#2c3e50] h-[500px]  desktop:w-[450px] '>my ber</div>

            </div>



        </div >
    );
}

export default MatchDetails;
