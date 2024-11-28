import Heading1 from '@/components/headings/Heading1'
import Paragraph from '@/components/headings/Paragraph'
import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='container my-4'>
        <Heading1 className='text-[#F27C27]'>
            ACERCA DEL PROYECTO
        </Heading1>
        <Paragraph className='text-[#087E8A] w-4/5 text-center mx-auto'>
        Praderas de Yangas está estratégicamente ubicado en av. Tupac Amaru Km. 55 , Santa Rosa de Quives que te ofrece una ubicación privilegiada cerca al campo y de 5 de los mejores lugares turisticos que nos ofrece la ciudad de Canta.
        </Paragraph>
        <div className='w-[90%] mx-auto my-6 flex justify-center items-center'>
            <Image
                src={"/video/image1.png"}
                alt="video_yangas"
                width={700}
                height={700}
                className='object-cover block xl:hidden'
            />
            <Image
                src={"/video/image1.png"}
                alt="video_yangas"
                width={1000}
                height={1000}
                className='object-cover xl:block hidden'
            />
        </div>

        
    </section>
  )
}

export default About