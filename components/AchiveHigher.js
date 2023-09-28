import React from 'react'
import Mobile from '../public/assets/images/Mobile Marketing-pana.png'
import Marketing from '../public/assets/images/Marketing consulting-cuate.png'
import Blog from '../public/assets/images/Blog post-amico.png'
import Consulting from '../public/assets/images/Marketing consulting-pana.png'
import Image from 'next/image'

const AchiveHigher = () => {
    return (
        <div className='bg-[#E7ECF0]'>
            <div class="container px-5 py-8 mx-auto">
                <div>
                    <h1 className='text-[#212121] lg:text-[40px] md:text-[40px] text-[32px] lg:leading-[60px] md:leading-[60px] leading-[48px] font-bold text-center mb-10'>Achieve higher results with our <br /> <span className='text-[#5A914D]'>Influencer campaigns!</span></h1>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div>
                            {/* <img src={Mobile.src} alt="" class="mb-3 inline-block" /> */}
                            <Image
                                src={Mobile.src}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                class="mb-3 inline-block"
                            />
                            <h1 className='text-[#212121] font-semibold lg:text-[20px] lg:mb-4 md:mb-4 mb-3'>Brand Awareness</h1>
                            <p className='text-center leading-[30px] text-[#212121] font-normal text-[16px]'>Select this option if your campaign objective is to increase brand recognition</p>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div>
                            {/* <img src={Marketing.src} alt="" class="mb-3 inline-block" /> */}
                            <Image
                                src={Marketing.src}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                class="mb-3 inline-block"

                            />

                            <h1 className='text-[#212121] font-semibold lg:text-[20px] lg:mb-4 md:mb-4 mb-3'>Affiliate marketing</h1>
                            <p className='text-center leading-[30px] text-[#212121] font-normal text-[16px]'>Select this option if your campaign objective is to increase brand recognition</p>
                        </div>
                    </div>


                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div>
                            {/* <img src={Blog.src} alt="" class="mb-3 inline-block" /> */}
                            <Image
                                src={Blog.src}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                class="mb-3 inline-block"
                            />
                            <h1 className='text-[#212121] font-semibold lg:text-[20px] lg:mb-4 md:mb-4 mb-3'>Content creation</h1>
                            <p className='text-center leading-[30px] text-[#212121] font-normal text-[16px]'>Select this option if your campaign objective is to increase brand recognition</p>
                        </div>
                    </div>


                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div>
                            {/* <img src={Consulting.src} alt="" class="mb-3 inline-block" /> */}
                            <Image
                                src={Consulting.src}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                class="mb-3 inline-block"
                            />
                            <h1 className='text-[#212121] font-semibold lg:text-[20px] lg:mb-6 md:mb-6 mb-3'>Website traffic</h1>
                            <p className='text-center leading-[30px] text-[#212121] font-normal text-[16px]'>Select this option if your campaign objective is to increase brand recognition</p>
                        </div>
                    </div>


                </div>
                <div className='flex flex-wrap justify-center text-center gap-5 mt-5'>
                    <button class="bg-[#FFFFFF] border-[2px] border-[#0F3D68]  lg:w-[288px] md:w-[288px] w-[260px]  lg:h-[48px] md:h-[48px] h-[40px] rounded-[40px] text-[#0F3D68] text-[16px] font-semibold leading-[24px] ">
                        Know more
                    </button>
                    <button class="bg-[#0F3D68] border-[2px] border-[#0F3D68]  lg:w-[288px] md:w-[288px] w-[260px]  lg:h-[48px] md:h-[48px] h-[40px] rounded-[40px] text-[#FFFFFF] text-[16px] font-semibold leading-[24px] ">
                        Try for free now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AchiveHigher