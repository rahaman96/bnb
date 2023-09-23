import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import LandingSection from '@/components/LandingSection'
import Slideshow from '@/components/SildeShow'
import CounterSection from '@/components/CounterSection'
import AchiveHigher from '@/components/AchiveHigher'
import Influencer from '@/components/Influencer'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <NavBar />
      <LandingSection />
      {/* <Slideshow  /> */}
      <CounterSection />
      <AchiveHigher />
      <Influencer />
      <Features />
      <Demo />
     <Footer/>

    </>
  )
}
