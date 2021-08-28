import { Field } from 'formik'

type FormProps = {
  name?: string
  required?: boolean
  inputProps?: any
  type?: string
  placeholder?: string
  value?: string
}

const CustomForm: React.FC<FormProps> = ({
  name,
  required = false,
  type = 'text',
  placeholder,
  value
}) => {
  return (
    <Field
      name = { name }
      required = { required }
      type = { type }
      placeholder = { placeholder }
      value = { value }
      style = {{
        fontSize: 16,
        fontFamily: "POPPINS",
        textAlign: 'center'
      }}
    />
  )
}

export default CustomForm