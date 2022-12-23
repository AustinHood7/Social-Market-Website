import React from 'react'
import Image from 'next/image'

function PageFooter() {
  return (
        <div className="h-[10vh] flex justify-between bg-sky-700 items-center z-10 relative text-sky-100 px-[5%]">
            <a href='SoleIndustries.com'>
            2022 © SoleIndustries All Rights Reserved
            </a>
            <Image
                src='/logo_transparentSquare.png'
                alt=''
                width={90}
                height={90}
            />
            <a className="mailto" href="mailto:ParkerJoyce@soleindustries.com">
                <div className='p-6 border-0 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl'>
                    Send us a message
                </div>
            </a>
        </div>
  )
}

export default PageFooter
