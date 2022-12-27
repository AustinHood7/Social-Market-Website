import Image from 'next/image'
import Footer from '../components/Footer'

const LandingPage2 = (props) => {
    return (
        <>
            <div className="flex-col items-center h-screen bg-gradient-to-r from-sky-600 to-emerald-600">

                <div className='flex justify-center items-center h-[92vh] z-100 relative'>
                    <h1 className="mt-3 text-6xl font-bold max-w-[35vw] text-sky-100 text-center">{props.info}</h1>
                </div>
                <Footer />
            </div>
        </>
        
    )
}

export default LandingPage2