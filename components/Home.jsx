import LandingPage from './LandingPage'
import PeopleCard from './PeopleCard'
import PageFooter from './PageFooter'
import TextBox1 from './TextBox1'
import Image from 'next/image';

const Home = () => {
    return (
        <>
        <div className='overflow-hidden'>
            <LandingPage/>
            <div className='relative z-20 flex justify-center pt-[5vh] bg-white text-sky-900'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <span className='text-4xl font-bold'>What is The Social Market? </span>
                    <div className='flex items-center justify-center w-full max-w-full mt-10 border maxSm:flex-col md:justify-evenly bg-gradient-to-r from-sky-600 to-emerald-600'>
                        <PeopleCard
                            name="Lebron James"
                            following="206M"
                            category="Athletics"
                            instagram="139M"
                            twitter="52M"
                            youtube="-"
                            social_equity="TBD"
                            spotify="-"
                            tiktok="-"
                            facebook="91M"
                            src='/lebronJames300x300.png'
                        />
                        <PeopleCard
                            name="Justin Bieber"
                            following="569M"
                            category="Music"
                            instagram="267M"
                            twitter="113M"
                            youtube="70M"
                            social_equity="109M"
                            spotify="73M"
                            tiktok="26M"
                            facebook="91M"
                            src='/JustinBieberSquare.png'
                        />                        
                        <PeopleCard
                            name="J-Cole"
                            following="56M"
                            category="Music"
                            instagram="-"
                            twitter="14M"
                            youtube="7M"
                            social_equity="35M"
                            spotify="29M"
                            tiktok="-"
                            facebook="6M"
                            src='/j-coleSquare.png'
                        />                
                        <PeopleCard
                            name="PewDiePie"
                            following="140M"
                            category="Social Media"
                            instagram="21.6M"
                            twitter="520K"
                            youtube="111M"
                            social_equity="TBD"
                            spotify="417K"
                            tiktok="-"
                            facebook="9M"
                            src='/pewdiepieSquare.png'
                        />
                        <PeopleCard
                            name="Charli D'Amelio"
                            following="206M"
                            category="Social Media"
                            instagram="49M"
                            twitter="5M"
                            youtube="9M"
                            social_equity="TBD"
                            spotify="-"
                            tiktok="150M"
                            facebook="3M"
                            src='/charlieSquare.png'
                        />
                    </div>
                    <div className='my-10 text-4xl font-bold text-center'>Take the power back</div>
                    <div className='flex text-center text-2xl bg-opacity-10 border-0 rounded-xl bg-sky-500 p-5 mb-10 max-w-[80vw] maxSm:ml-[15vw] mx-[15vw]'>
                        With the expansion of digital media over the past decade millions of people see opportunites every day; whether stumbling across an exciting new start-up
                        , an up and coming musician, new actors in their premier film, or a first-year athlete. Accredited investors are the ony people able to tap into this market.
                        Allowing the general public access through a public market of TV shows, a new artist album, or a revolutionary new start-up through a public market would allow 
                        seemingly endless opportunities across the globe. 
                    </div>
                    <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw]'/>
                    <div className='my-10 text-4xl font-bold text-center'>How does it work? </div>
                    <div className='md:h-[78vh] maxSm:flex-col flex text-center justify-center'>
                        <div className=''>
                            <TextBox1 
                                input='Sign up for the Social Market and browse all participating creators'
                                boxText="Sign up"
                            />
                        </div>
                        <div className='translate-y-[15%]'>
                            <TextBox1 
                                input='See what is on the Social Market and check the Social Equity of your favorite 
                                artists'
                                boxText="Browse the Social Market"
                            />
                        </div>
                        <div className='translate-y-[30%]'>
                            <TextBox1 
                                input='Send a request to be evaluated and become a publically traded figure'
                                boxText="Opt into trading on the market"
                            />
                        </div>
                        <div className='translate-y-[45%]'>
                            <TextBox1 
                                input='Sign up for the Social Market and browse all participating creators'
                                boxText="Trade or invest on the Social Market"
                            />
                        </div>
                    </div>
                        <hr className='border-sky-900 maxSm:mt-[50%] border-[1px] rounded-xl w-[80vw] mx-[10vw] mt-5'/>
                        <div className='mx-[25vw] text-center my-10 text-4xl font-bold'>Resources </div>
                        <div className='flex mx-4 my-8 justify-evenly maxSm:flex-col'>
                            <div className='flex-col mx-4 text-2xl font-bold text-center'>
                                CBDC
                                <a href='https://www.federalreserve.gov/central-bank-digital-currency.htm'>
                                        <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                                        transition ease-in-out delay-150'>
                                            <Image
                                                src={'/cbdc412x412.png'}
                                                alt=''
                                                width={412}
                                                height={412}
                                            />
                                        </div>
                                </a>
                            </div>

                            <div className='flex-col mx-4 text-2xl font-bold text-center'>
                                Crypto-currency
                                <a href='https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency'>
                                        <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                                        transition ease-in-out delay-150'>
                                            <Image
                                                src={'/cryptoSquare.png'}
                                                alt=''
                                                width={412}
                                                height={412}
                                            />
                                        </div>
                                </a>
                            </div>

                            <div className='flex-col mx-4 text-2xl font-bold text-center'>
                                CBDC Regional Map
                                <a href='https://cbdctracker.org/'>
                                    <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                                    transition ease-in-out delay-150'>
                                        <Image
                                            src={'/cbdcTracker1x1.png'}
                                            alt=''
                                            width={412}
                                            height={412}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
            <PageFooter />
            </div>
        </>   
    )
}

export default Home