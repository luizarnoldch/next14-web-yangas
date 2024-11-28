import { FormInput } from '@/components/form/form-input'
import { FormSubmit } from '@/components/form/form-submit'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {}

const formFields = [
  {
    label: 'Nombres y Apellidos',
    placeholder: 'Nombres y Apellidos',
    id: 'name',
  },
  {
    label: 'Celular / Whatssap',
    placeholder: '+51 | Ingresa tu núero de celular',
    id: 'telefono',
  },
  {
    label: 'Correo Electrónico',
    placeholder: 'Ejemplo@wrrhome.com',
    id: 'email',
  },
]

const Form = (props: Props) => {
  return (
    <form
      action=""
      className="my-2 xl:my-6 xl:gap-x-24 xl:gap-y-8 flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:grid-rows-2"
    >
      {
        formFields.map(field => (
          <FormInput key={field.id} id={field.id} placeholder={field.placeholder} label={field.label} className=' py-5 px-4 rounded-3xl' />
        ))
      }

      <label htmlFor="contacto" className="block">
        <span className="text-xs xl:text-base font-medium block mb-2">
          ¿Cómo le gustaría adquirirlo?
        </span>
        <Select>
          <SelectTrigger className="text-xs xl:text-sm font-medium text-[#929292] py-2 px-4 rounded-full w-full placeholder">
            <SelectValue placeholder="Seleccionar" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Seleccione un medio</SelectLabel>
              <SelectItem value="email">
                <span>Email</span>
              </SelectItem>
              <SelectItem value="whatsapp">
                <span>Whatsapp</span>
              </SelectItem>
              <SelectItem value="telefono">
                <span>Teléfono</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>

      <FormSubmit className="bg-[#087E8A] w-60 xl:w-96 xl:py-4 xl:text-xl mx-auto rounded-full text-white font-semibold text-sm col-span-2 hover:bg-[#087E8A]/60  active:bg-[#087E8A]/80 py-4">
        <p>!Sí, quiero asesoría Personalizada!</p>
      </FormSubmit>
    </form>
  )
}

export default Form