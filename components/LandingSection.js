import React from 'react'
import Rectangle2150 from '../public/assets/images/Rectangle 2150.png'
import Frame from '../public/assets/images/Frame 1000004178.png'
import Rectangle2155 from '../public/assets/images/Rectangle 2155.png'
import Rectangle2156 from '../public/assets/images/Rectangle 2156.png'
import Rectangle2157 from '../public/assets/images/Rectangle 2157.png'
import Rectangle2158 from '../public/assets/images/Rectangle 2158.png'
const LandingSection = () => {
    return (
        <div>
            <div className='lg:flex md:flex  bg-[#E7ECF0] relative '>
                <div className='lg:w-[813px] md:w-[813px] relative'>
                    <div className='lg:visible  md:visible invisible overflow-hidde'>
                        <img src={Rectangle2150.src} alt="Rectangle2150" className='lg:h-full md:h-full h-[308px]' />
                    </div>
                    <div className='absolute lg:top-14 md:top-6 top-5 bg-[#E7ECF0 px-3 md:px-6 lg:px-10'>
                        <h6 className='text-[#212121]  font-bold font-sans lg:text-[48px] lg:leading-[72px] lg:w-[609px] lg:h-[144px] md:text-[25px] md:w-[350px] md:h-[70px] text-[40px] leading-[50px] lg:text-left md:text-left text-center '>Helping brands grow with niche <span className='text-[#5A914D]'>influencers</span> </h6>
                        <p className='text-[#212121] lg:text-[20px] lg:mt-9 md:mt-9 mt-4 lg:leading-[40px] font-normal lg:w-[504px] lg:h-[80px] md:text-[16px] md:leading-[25px] md:w-[360px] text-[16px] leading-[30px] lg:text-left md:text-left text-center '>Explore wide range of influencers having 1K to 100Mn followers for your targeted audience.</p>
                        <button className='text-[#FFFFFF]  lg:mt-9 md:mt-5 mt-4 lg:text-[20px] font-medium lg:leading-[44px lg:w-[311px] lg:h-[54px] bg-[#0F3D68] rounded-full md:text-[16px] md:leading-[30px] md:w-[200px] md:h-[40px] w-[276px w-full h-[40px] text-[16px] leading-[24px]  '>Start a campaign</button>
                    </div>
                </div>
                <div className='lg:w-[627px] md:w-[627px] w-full relative'>

                    <div className='lg:mt-0 md:mt-0  mt-14 lg:mb-0 md:mb-0 mb-5 overflow-hidde'>
                        <img src={Frame.src} alt="Frame" className='lg:h-full md:h-full h-[426px' />
                    </div>

                    <div className='absolute lg:top-4 md:top-4 -top-10 lg:left-[150px] md:left-[20%] left-[5%'>
                        <div className="flex lg:gap-4 md:gap-4 gap-8 justify-center ">
                            <img src={Rectangle2155.src} alt="Rectangle2155" className='lg:w-[45%] md:w-[45%] w-[35%] ' />
                            <img src={Rectangle2156.src} alt="Rectangle2156" className='lg:w-[40%] md:w-[40%] lg:h-[70%] md:h-[45%] h-[20%] w-[32%]' />

                        </div>
                        <div className="flex lg:gap-4 md:gap-10 gap-8 lg:mt-5 justify-center items-center mx-auto">
                            <img src={Rectangle2158.src} alt="Rectangle2158" className='lg:w-[40%] md:w-[35%] lg:h-[40%] lg:mt-10 md:mt-4 w-[35%] ' />
                            <img src={Rectangle2157.src} alt="Rectangle2157" className='lg:w-[40%] md:w-[35%] lg:mt-[-50px] md:mt-[-30px] mt-[-20px] w-[33%]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection