import React, { useState } from 'react'
import BnbLogo from '../public/assets/images/BNB.png'
const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div>
            <nav
                className="relative flex w-full flex-wrap items-center justify-betwee mx-auto bg-[#7BA771] py-2  shadow-lg lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3 md:px-6 lg:px-10">


                    <button onClick={toggleMobileMenu}
                        className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent4"
                        aria-controls="navbarSupportedContent4"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <div>
                        <a
                            className="mx-2 my-1 mr-auto flex items-center  lg:mb-0 lg:mt-0"
                            href="#">
                            <img
                                className="mr-2"
                                src={BnbLogo.src}
                                style={{ height: '20px' }}
                                alt="TE Logo"
                                loading="lazy" />
                        </a>
                    </div>
                    <div
                        className={`!visible mt-2  flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto ${isMobileMenuOpen ? 'md:flex' : 'hidden'}`}
                        id="navbarSupportedContent4"
                        data-te-collapse-item>
                        <ul
                            className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                            data-te-navbar-nav-ref>

                        </ul>

                        <div className="flex items-center justify-between">
                            <ul
                                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                                data-te-navbar-nav-ref>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a
                                        className="text-[#FFFFFF] lg:px-3"
                                        href="#"
                                        data-te-nav-link-ref
                                    >Home</a>

                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a
                                        className="text-[#FFFFFF] lg:px-3"
                                        href="#"
                                        data-te-nav-link-ref
                                    >For brands</a>

                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a
                                        className="text-[#FFFFFF] lg:px-3"
                                        href="#"
                                        data-te-nav-link-ref
                                    >For Influencers</a>

                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <a
                                        className="text-[#FFFFFF] lg:px-3"
                                        href="#"
                                        data-te-nav-link-ref
                                    >About us</a>

                                </li>


                                <button className="text-[#FFFFFF]">Get Started</button>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar