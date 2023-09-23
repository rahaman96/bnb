import React from 'react'
import google from '../public/assets/images/google-2015 1.png'
// import google from '../../public/assets/images/google-2015 1.png'
// import netflex from '../../public/assets/images/netflex.svg'
// import air from '../../public/assets/images/air.svg'
// import amazon from '../../public/assets/images/amazon.svg'
// import facebook from '../../public/assets/images/facebook.svg'
import styles from './SlideShow.module.css'
const Company = () => {
    return (
        <div className='py-8 mx-auto bg-[#FFFFFF]'>
            <div className="md:py-5 flex justify-between md:mt-4 gap-10 md:gap-4">
                <div className={styles.wrapper}>
                    <div className={styles.slider}>
                        <div className={`flex gap-6 ${styles.slide_track}`}>

                            <div className={styles.slide}>
                                <img src={google.src} alt='google' />
                            </div>

                            <div className={styles.slide}>
                            <img src={google.src} alt='netflex' />
                            </div>

                            <div className={styles.slide}>
                            <img src={google.src} alt='air' />
                            </div>

                            <div className={styles.slide}>
                            <img src={google.src} alt='amazon' />
                            </div>

                            <div className={styles.slide}>
                            <img src={google.src} alt='facebook' />
                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Company