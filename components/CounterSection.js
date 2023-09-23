import React from 'react'
import Rectangle1 from '../public/assets/images/Rectangle 1.png'
import Rectangle2 from '../public/assets/images/Rectangle 2.png'
import Rectangle3 from '../public/assets/images/Rectangle 3.png'
import Rectangle4 from '../public/assets/images/Rectangle 4.png'
import Rectangle5 from '../public/assets/images/Rectangle 5.png'

const CounterSection = () => {
    return (
        <div>
            
            <div class='bg-white py-5'>
                <div class="contai mx-auto flex px- py- md:flex-row flex-col-reverse  items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-2/5 w-5/6  md:mb-0 px-0 md:px-6 lg:px-10 mt-14 md:mt-0 lg:mt-0">
                        <div className='flex'>
                            <div className='relative'>
                                <div className='lg:w-full md:w-[124px]'>
                                    <img src={Rectangle1.src} alt="" />
                                </div>
                                <div className='absolute lg:top-14 lg:left-14 md:top-8 md:left-6 top-12 left-10'>
                                    <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
                                    <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
                                </div>

                            </div>
                            <div className='relative'>
                                <div className='lg:w-full md:w-[124px]'>
                                    <img src={Rectangle2.src} alt="" />
                                </div>
                                <div className='absolute lg:top-14 lg:left-14 md:top-8 md:left-6 top-12 left-10'>
                                    <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
                                    <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className='relative'>
                                <div className='lg:w-full md:w-[124px]'>
                                    <img src={Rectangle3.src} alt="" />
                                </div>
                                <div className='absolute lg:top-14 lg:left-14 md:top-8 md:left-6 top-12 left-10'>
                                    <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
                                    <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='lg:w-full md:w-[124px]'>
                                    <img src={Rectangle4.src} alt="" />
                                </div>
                                <div className='absolute lg:top-14 lg:left-14 md:top-8 md:left-6 top-12 left-10'>
                                    <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
                                    <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:flex-grow md:w-3/5 lg:pl- md:pl- fle flex-col relative">
                        <div>
                            <img className='lg:visible md:visible invisible' src={Rectangle5.src} alt="" />

                        </div>
                        <div className='absolute lg:top-16 md:top-6 lg:left-[130px] md:left-[90px] -top-7 px-3 md:px-0 lg:px-0 bg-[#EEF4ED] py-5 md:py-0 lg:py-0 '>
                            <h1 className='text-[#212121] font-bold lg:text-[40px] lg:leading-[40px] lg:mb-5 md:mb-3'>For <span className='text-[#5A914D]'>Brands</span> </h1>
                            <p className='text-[#212121] lg:text-[20px] lg:leading-[40px] md:text-[15px] font-normal '>With our platform, brands can connect with niche influencers to reach highly targeted audiences for maximum impact. By leveraging the influence of these creators, businesses can reduce costs while achieving better results and increased brand recognition. Laser-focused approach ensures that your brand's message is seen by the right people, at the right time. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CounterSection