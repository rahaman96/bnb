import React from 'react'
import Rectangle2150 from '../public/assets/images/Rectangle 2150.png'
import Rectangle1 from '../public/assets/images/Rectangle 1.png'
import Rectangle2 from '../public/assets/images/Rectangle 2.png'
import Rectangle3 from '../public/assets/images/Rectangle 3.png'
import Rectangle4 from '../public/assets/images/Rectangle 4.png'
import Rectangle5 from '../public/assets/images/Rectangle 5.png'
const Influencer = () => {
  return (
    <div class="bg-white py-10 flex  justify-between md:flex-row flex-col  items-center">

      <div class="lg:flex-grow  md:w-3/5 lg:pl- md:pl- fle flex-co relative lg:mb-0 md:mb-0 mb-7">
        <img src={Rectangle2150.src} alt="" className='lg:visible md:visible invisible' />
        <div className='absolute text-[#212121]  lg:top-14  md:top-2  -top-9 lg:w-11/12 md:w-11/12 lg:px md:px-5 px-4 lg:py-0 md:py-0 py-5 lg:bg-inherit md:bg-inherit bg-[#EEF4ED]'>
          <h1 className='lg:text-[40px] md:text-[25px] md:leading-[40px] font-bold lg:leading-[60px] lg:mb-5 md:mb-2'>For <span className='text-[#5A914D]'>Influencers</span></h1>
          <p className='text-[#212121] lg:text-[20px] md:text-[15px] font-normal lg:leading-[40px]'>As an influencer on our platform, you will have the opportunity to collaborate with various niche brands, connecting with their highly targeted audiences and growing your own following in the process. With a steady stream of brand requests coming in every day, you can continue to increase your earnings and achieve your goals as an influencer. Join us today to take advantage of our robust network of brands and elevate your influencer career to new heights!</p>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-2/5 w-5/6  md:mb-0 px-0 md:px-6 lg:px-10 mt-16 md:mt-0 lg:mt-0">
        <div className="flex ">
          <div className='relative'>
            <img src={Rectangle1.src} alt="" />
            <div className='absolute lg:top-12 lg:left-14 md:top-9 md:left-7 top-12 left-10'>
              <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
              <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
            </div>
          </div>
          <div className='relative'>
            <img src={Rectangle2.src} alt="" />
            <div className='absolute lg:top-12 lg:left-14 md:top-9 md:left-7 top-12 left-10'>
              <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
              <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className='relative'>
            <img src={Rectangle3.src} alt="" />
            <div className='absolute lg:top-12 lg:left-14 md:top-9 md:left-7 top-12 left-10'>
              <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
              <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
            </div>
          </div>
          <div className='relative'>
            <img src={Rectangle4.src} alt="" />
            <div className='absolute lg:top-12 lg:left-14 md:top-9 md:left-7 top-12 left-10'>
              <h5 className='text-center text-[#5A914D] lg:text-[32px] font-semibold'>10k+</h5>
              <p className='text-center lg:text-[16px] font-semibold'>Influencer</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Influencer