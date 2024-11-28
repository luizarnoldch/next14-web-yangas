import Image from 'next/image'
import React from 'react'

type Props = {}

const YangasLogo = (props: Props) => {
  return (
    <div
      className={`flex justify-center items-center
                mx-auto
                w-36 sm:w-[13.5rem] xl:w-72
                h-14 sm:h-[5.25rem] xl:h-28
                bg-[#F1F1F1]/40 
                rounded-b-2xl`}
    >
      <div
        className={`relative
                    w-28 sm:w-[10.5rem] xl:w-56
                    h-9 sm:h-[3.375rem] xl:h-[4.5rem]`}
      >
        <Image src="/Logo_1.png" alt="logo_1" fill className="absolute" />
      </div>
    </div>
  )
}

export default YangasLogo
