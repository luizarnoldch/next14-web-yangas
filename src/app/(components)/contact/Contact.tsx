import YangasLogo from '@/components/logos/YangasLogo'
import Image from 'next/image'
import ContactTitle from './ContactTitle'
import ContactBadget from './ContactBadget'
import ContactForm from './ContactForm'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className="flex flex-col w-full h-screen relative">
      <div className="w-full h-screen bg-orange-300 absolute mix-blend-multiply">
        <Image
          src="/BG1.png"
          alt="yangas"
          fill
          className="absolute top-0 left-0 w-full h-screen z-0 object-cover"
        />
      </div>
      <div className="absolute w-full h-screen">
        <div className="w-10/12 h-full mx-auto">
          <div className="h-[10%] sm:h-[15%] xl:h-[15%] w-full">
            <YangasLogo />
          </div>

          <div className="h-[25%] sm:h-[20%] xl:h-[25%] flex flex-col gap-4">
            <ContactTitle />
            <ContactBadget />
          </div>
          <div className="h-[60%] sm:h-[60%] sm:mt-4 xl:h-[55%] w-full relative">
            <div className="w-full h-full flex justify-center items-center">
              <div className="absolute bg-[#05474E]/60 rounded-3xl w-full h-full mix-blend-multiply max-w-5xl mx-auto"></div>
              <div className="w-full absolute py-4 max-w-5xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
