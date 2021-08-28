import { Field } from 'formik'

type FormProps = {
  name: string
  required?: boolean
  inputProps?: any
  type?: string
  placeholder?: string
}

const CustomForm: React.FC<FormProps> = ({
  name,
  required = false,
  type = 'text',
  placeholder,
}) => {
  return (
    <Field
      name = { name }
      required = { required }
      type = { type }
      placeholder = { placeholder }
      style = {{
        fontSize: 16,
        fontFamily: "POPPINS",
        textAlign: 'center'
      }}
    />
  )
}

export default CustomForm