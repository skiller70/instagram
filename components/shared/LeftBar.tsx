import Image from 'next/image'
import React from 'react'

const LeftBar = () => {
  return (
    <div className='  h-screen  sticky left-0 top-0 flex  flex-col justify-between overflow-y-auto border-r px-7 pt-12 pb-8  max-sm:hidden lg:w-[300px]'>

        <div>

          <Image src="/instaLogo.svg" height={100} width={130} alt="logo"/>
        </div>
        <div></div>


    </div>
  )
}

export default LeftBar