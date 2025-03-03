
import React from 'react';
// import fi from '../../../assests/ic_fancy.png';
// import ib from '../../../assests/ic_bm.png';
// import tv from '../../../assests/ic_tv (2).png'
const Tennis = () => {

    const matches = [
        { name: "Leylah Fernandez v Linda Noskova / 23/01/2025 13:30:00", },
        { name: "Sava Ioana Teodora - Laura Rahnel / 23/01/2025 14:00:00", }
    ];
    console.log(matches);
    return (
        <div className='bg-[#f2f2f2] h-[700px] ml-[7px]  mr-[6px] mt-[5px] font-roboto flex '>

            {/* Game Section

            <div className='w-full'>
                <hr className='border-t-1 border-[#CCCCCC]' />
                {/* Fixed Header 
                <div className='grid grid-cols-12 bg-[#F7F7F7]'>

                    <div className='font-semibold text-[19.111px]  py-[6.5px] pl-[6.1px] tracking-custom col-span-7 '>
                        <p className=''>Game</p>
                    </div>

                    <div className='grid grid-cols-3 col-span-5 text-center  place-content-center font-semibold text-[19.111px]'>
                        <p className='text-center pl-[130.8px]'>1</p>
                        <p className='mx-[130.3px]'>X</p>
                        <p className='mx-[104.5px]'>2</p>
                    </div>

                </div>
                <hr className='border-t-1 border-[#CCCCCC]' />

                {/* Game Data Section 

                {matches.map((item, index) => (
                    <div key={index}>
                        <div className=' items-center grid grid-cols-12 '>

                            <div className='col-span-5 text-[#2c3e50]'>
                                <p className='text-[18.75px] py-[1.25px] pl-[6.1px] tracking-customTight1 '>{item.name}</p>
                            </div>

                            <div className='grid grid-cols-9 col-span-7 text-center ml-[59px] '>

                                <div className=' flex col-span-3  ml-[25.9px] '>
                                    <span className='bg-[#28A745] inline-block w-4 h-4 my-[7px]  rounded-full '></span>
                                    <img src={tv} alt="" className='h-[19.089px] my-[5.7px] mx-[27.7px] opacity-0 w-[21.33px] pt-[0.2px] ' />
                                    <img src={fi} alt="" className='size-[16px] w-[24px] mt-[7px] ml-[-2.5px] font-bold  opacity-0' />
                                    <img src={ib} alt="" className='size-[16px] w-[24px] mt-[7.1px] mx-[21.7px] font-bold' />
                                </div>

                                <div className='col-span-6 grid-cols-6 grid font-bold text-[18.8px]'>
                                    <p className='bg-[#72BBEF] place-content-center'>-</p>
                                    <p className='bg-[#FAA9BA] place-content-center'>-</p>
                                    <p className='bg-[#72BBEF] place-content-center'>-</p>
                                    <p className='bg-[#FAA9BA] place-content-center'>-</p>
                                    <p className='bg-[#72BBEF] place-content-center'>-</p>
                                    <p className='bg-[#FAA9BA] place-content-center border-r'>-</p>
                                </div>
                            </div>
                        </div>
                        <hr className='border-t-1  border-[#CCCCCC]' />
                    </div>
                ))
                }

            </div> */}

        </div>
    );
}

export default Tennis;