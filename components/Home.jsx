import LandingPage from '../components/LandingPage'
import PeopleCard from '../components/PeopleCard'
import PageFooter from '../components/PageFooter'
import GraphBox1 from './GraphBox1'
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <LandingPage/>
            <div className='relative z-20 flex justify-center pt-[5vh] bg-white text-sky-900 overflow-hidden'>
                <div className='flex-col justify-center text-center'>
                    <span className='text-4xl font-bold'>What is The Social Market? </span>
                    <div className='mt-10 border md:flex md:justify-evenly bg-gradient-to-r from-sky-600 to-emerald-600'>
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
                    <div className='mx-[25vw] text-center my-10 text-4xl font-bold'>Take the power back</div>
                    <div className='md:mx-[25vw] text-center text-2xl bg-opacity-10 border-0 rounded-xl bg-sky-500 p-5 mb-10'>
                        Entertainers from music to online influencers must sign contracts that take 30-80% of their earnings. 
                        The Social Market solves this problem by giving access to a secure, safe, and public market focusing on social equity. 
                        This problem has been around since the entertainment industry existed. Stories of individuals or bands having legal battles over their contract. 
                        Corporations take advantage of small influencers, artists, and musicians and the social market allows all those creators to take back control of their content 
                        and financial decisions. 
                    </div>
                    <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw] mx-[10vw]'/>
                    <div className='h-[70vh]'>
                        <div className='mx-[25vw] text-center my-10 text-4xl font-bold'>How does it work? </div>
                            <div className='flex items-center justify-center text-center'>
                                <div className='flex-col justify-center text-center '>
                                    <GraphBox1
                                        sign_up="Sign up"
                                    />
                                    <div className='flex w-[15vw] my-5 text-lg font-bold text-center'>Sign up for the Social Market and browse all participating creators</div>
                                </div>
                                <div className='m-5 mb-[2%] text-6xl text-sky-900 '>
                                    <FaArrowRight/>
                                </div>

                                <div className='flex-col justify-center text-center translate-y-[15%]'>
                                    <GraphBox1
                                        sign_up="Browse the Social Market"
                                    />
                                    <div className='flex w-[15vw] my-5 text-lg font-bold text-center'>See what is on the Social Market and check the Social Equity of your favorite 
                                    artists</div>
                                </div>
                                <div className='m-5 mt-[7%] text-6xl text-sky-900'>
                                    <FaArrowRight/>
                                </div>

                                <div className='flex-col justify-center text-center translate-y-[30%]'>
                                    <GraphBox1
                                        sign_up="Opt into trading on the market"
                                    />
                                    <div className='flex w-[15vw] my-5 text-lg font-bold text-center'>Send a request to be evaluated and become a publically traded figure</div>
                                </div>
                                <div className='m-5  mt-[15%] text-6xl text-sky-900'>
                                    <FaArrowRight/>
                                </div>

                                <div className='flex-col justify-center text-center translate-y-[45%]'>
                                    <GraphBox1
                                        sign_up="Trade or invest on the Social Market"
                                    />
                                    <div className='flex  mb-[5%]  w-[15vw] my-5 text-lg font-bold text-center'>Trade or  invest in an individual's equity in the form of crypto-currency</div>
                                </div>
                            </div>
                        </div>
                        <hr className='border-sky-900 mt-[3%] border-[1px] rounded-xl w-[80vw] mx-[10vw]'/>
                        <div className='mx-[25vw] text-center my-10 text-4xl font-bold'>Resources </div>
                        <div className='flex my-8 justify-evenly'>
                            <div className='flex-col text-2xl font-bold text-center'>
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

                            <div className='flex-col text-2xl font-bold text-center'>
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

                            <div className='flex-col text-2xl font-bold text-center'>
                                Crypto Market Share
                                <a href='https://coinmarketcap.com/'>
                                    <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                                    transition ease-in-out delay-150'>
                                        <Image
                                            src={'/coinCapSquare.png'}
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
        </>   
    )
}

export default Home