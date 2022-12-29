import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import Image from 'next/image';

function info() {
  return (
    <div className='bg-white '>
      <Navbar/>
      <LandingPage2
        info="How does the Social Market work?"  
      />
      <div className='h-[100vh] flex justify-evenly items-center flex-wrap relative z-100 bg-white'>
        <div className='flex items-center justify-center w-full py-10 text-6xl font-bold text-sky-900 '>A deeper look</div>
        <div className='flex w-full bg-gradient-to-r from-sky-600 to-emerald-600 px-[5vw] justify-evenly py-5 items-center h-[86vh]'>
          <div className='text-2xl text-sky-100 max-w-[30vw]'>
              The entertainment industry is worth $2.5 trillion dollars globally up $400 billion since 2018, coupled with the rise of social media millions of people have now become 
              a globally recognizable brand more so than companies.  Social equity has now become one of the most valuable assets in the online world, the Social Market evaluates the 
              social equity, revenue, and other metrics. This social equity value allows a new investment tool to invest in projects like albums, movies, games, or athletics on a globally 
              accessible public trading platform. 
              <ul className='ml-10 list-disc'>
                <li>Esports // Video Games ($150 Billion)</li>
                <li>TV // Film ($380 Billion)</li>
                <li>Music ($113 Billion)</li>
                <li>Athletics ($501.5 Billion)</li>
              </ul>
              The entertainment industry is projected to have an annual growth of 13% over the next five years. 
          </div>
          <div className='text-2xl text-sky-100 max-w-[35vw] mx-[5vw] flex-col'>
            Gen-Z / Millennials are investing in the content of 750,000 creators. The Social Market is giving the investors a monetary return for this venture. 
            The increase in interest with investing shows the market is ripe for a new investing platform for the entertainment industry. 
            <div className='my-[2vh]'>
              <div className='overflow-hidden border rounded-2xl border-slate-700 w-[74%]'>
                <Image
                  src={'/marketSize3-2.png'}
                  alt=''
                  width={500}
                  height={330}
                />
              </div>
            </div>
            Paid subscription services like Patreon and Twitch allow a creator's fan base to pay a monthly fee to fuel a creator's content.
            Approximately 10 million people subscribe to over 750,000 creators who utilize these paid subscriptions as a form of investing in their content. 
            This is likely a factor to why many people are investing less into the traditional market as the trend presents on the bottom graph. 
          </div>
        </div>
      </div>
      <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw] mx-[10vw] '/>
      <div className='relative flex items-center justify-center w-full py-10 text-6xl font-bold bg-white text-sky-900 z-1'>Under the hood</div>
    </div>
  )
}

export default info
