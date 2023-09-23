import React from 'react'
import styles from '../components/Footer.module.css'
import facebook from '../public/assets/images/facebook.png'
import instagram from '../public/assets/images/Component 7.png'
import linkedin from '../public/assets/images/Component 8.png'
import twiter from '../public/assets/images/Component 9.png'
import email from '../public/assets/images/Component 10.png'

const Footer = () => {
    return (
        <div>
            <footer className={`${styles.footer} lg:h-[509px] h-auto md:px-10 md:p-24 p-5 `}>
                <div className="flex flex-col sm:flex-row  ">
                    <div className="footer-_left lg:w-1/2 md:1/2 w-full ">
                        <h5 className='md:mb-5 mb-2 text-[#FFFFFF] md:text-[20px] text-[16px] font-semibold leading-[20px] md:leading-[30px]'>About</h5>
                        <p className='text-[#FFFFFF] md:text-[16px] text-[14px] font-normal leading-[20px] md:leading-[30px] '>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>

                    </div>
                    <div className="footer-_right lg:w-1/2 md:1/2 w-full px-0 md:px-10 flex justify-between mt-4 ">
                        <div className="company">
                            <h5 className='md:mb-5 mb-2 text-[#FFFFFF] md:text-[20px] text-[16px] font-semibold leading-[20px] md:leading-[30px]'>Company</h5>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href=""> Home</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">About Us</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">Projects</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">Contact Us</a>
                            </p>
                        </div>
                        <div className="links">
                            <h5 className='md:mb-5 mb-2 text-[#FFFFFF] md:text-[20px] text-[16px] font-semibold leading-[20px] md:leading-[30px]'>Legal links</h5>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[20px] md:leading-[30px] font-normal '>
                                <a href="">Terms</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">Conditions</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">Policy</a>
                            </p>
                        </div>
                        <div className="Resource">
                            <h5 className='md:mb-5 mb-2 text-[#FFFFFF] md:text-[20px] text-[16px] font-semibold leading-[30px]'>Resource</h5>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">Our blog</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">Pricing</a>
                            </p>
                            <p className='text-[#FFFFFF] md:text-[16px] text-[14px] leading-[30px] font-normal '>
                                <a href="">News</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex gap-6 md:mt-0 mt-5">
                    <a href="">
                        <img src={facebook.src} alt="" />
                    </a>

                    <a href="">
                        <img src={instagram.src} alt="" />
                    </a>
                    <a href="">
                        <img src={linkedin.src} alt="" />
                    </a>

                    <a href="">
                        <img src={twiter.src} alt="" />
                    </a>
                    <a href="">
                        <img src={email.src} alt="" />
                    </a>
                </div>

                <div className="lastSec md:mt-24 mt-5 border-t-[1px] border-[#FFFFFF]">
                    <span className='text-[#FFFFFF] md:text-[16px] text-[14px] md:mt-10 mt-5 leading-[30px] flex font-normal justify-center'>Copyright © 2023 Brand Name  | All rights roserved.</span>
                </div>

            </footer>
        </div>
    )
}

export default Footer