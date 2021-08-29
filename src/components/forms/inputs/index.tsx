import { Field } from 'formik'
import theme from '../../../../styles/theme'

interface FormProps {
  name?: string
  required?: boolean
  inputProps?: any
  type?: string
  placeholder?: string
  value?: string
  background?: string
  style?: React.CSSProperties
}

const InputForm: React.FC<FormProps> = ({
  name,
  required = false,
  type = 'text',
  placeholder,
  value,
  style = {}
}) => {
  return (
    <>
      <Field
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        style={{
          background: '#C4C4C4',
          fontSize: 16,
          color: theme.colors.primaryBackground,
          textAlign: 'center',
          borderRadius: '20px',
          border: 'none',
          height: '30px',
          ...style
        }}
      />
    </>
  )
}

export default InputForm
