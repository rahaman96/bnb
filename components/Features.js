import React from 'react'
import Womanthinking from '../public/assets/images/Woman thinking-pana.png'
import Onlineshopping from '../public/assets/images/Online shopping-pana.png'
import Portfolio from '../public/assets/images/Portfolio Update-pana.png'

const Features = () => {
    return (
        <div className='bg-[#E7ECF0]'>
            <div className='py-10'>
                <h1 className='text-[#212121] text-center lg:text-[40px] md:text-[25px] md:leading-[40px]  font-bold '>Features to help you <br /> <span className='text-[#5A914D]'>grow as an Influencer</span>
                </h1>
            </div>


            <div className="container px-5 py- mx-auto">
                <div className="flex flex-wrap -m-4 mx-auto justify-center">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className=" mb-8 object-cover object-center  inline-block" src={Womanthinking.src} />
                            <h1 className="text-[#212121] font-semibold text-[20px] ">Choose brands</h1>
                            <p className='text-[#212121] w-64 text-center mx-auto text-[16px] font-normal leading-[30px] '>Take complete control of your brand partnerships.</p>

                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className=" mb-8 object-cover object-center  inline-block" src={Onlineshopping.src} />
                            <h1 className="text-[#212121] font-semibold text-[20px] ">Free online store</h1>
                            <p className='text-[#212121] w-64 text-center mx-auto text-[16px] font-normal leading-[30px]'>Set up a free online store to promote the products from brands you love.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className=" mb-8 object-cover object-center  inline-block" src={Portfolio.src} />
                            <h1 className="text-[#212121] font-semibold text-[20px] ">Create a portfolio</h1>
                            <p className='text-[#212121] w-64 text-center mx-auto text-[16px] font-normal leading-[30px] '>Showcase your talent and experience with a personalized portfolio.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center text-center gap-5 mt-5 py-5'>
                <button class="bg-[#FFFFFF] border-[2px] border-[#0F3D68]  lg:w-[288px] md:w-[288px] w-[260px]  lg:h-[48px] md:h-[48px] h-[40px] rounded-[40px] text-[#0F3D68] text-[16px] font-semibold leading-[24px] ">
                    Know more
                </button>
                <button class="bg-[#0F3D68] border-[2px] border-[#0F3D68]  lg:w-[288px] md:w-[288px] w-[260px]  lg:h-[48px] md:h-[48px] h-[40px] rounded-[40px] text-[#FFFFFF] text-[16px] font-semibold leading-[24px] ">
                    Try for free now
                </button>
            </div>
        </div>
    )
}

export default Features