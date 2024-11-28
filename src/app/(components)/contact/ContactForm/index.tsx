
import Heading3 from '@/components/headings/Heading3'
import Paragraph from '@/components/headings/Paragraph'
import Form from './Form'

const ContactForm = () => {
  return (
    <div
      className="
        xl:p-8 px-4 py-2
        min-w-[19rem] w-full text-white flex flex-col xl:w-full xl:max-w-7xl mx-auto"
    >
      <div className="w-56 mx-auto flex flex-col gap-4 xl:gap-2 sm:w-full sm:max-w-xl xl:w-full xl:max-w-3xl">
        <Heading3 className='text-[#16F1FF]'>
          !QUIERO QUE ME CONTACTEN PARA MAYOR INFORMACIÓN!
        </Heading3>
        <Paragraph>
          Déjanos tus datos y un asesor se contactará contigo lo antes posible.
        </Paragraph>
      </div>
      <Form />
    </div>
  )
}

export default ContactForm
