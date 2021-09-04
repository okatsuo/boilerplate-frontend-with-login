import { Field } from 'formik'

interface ButtonProps {
  type?: string
  value?: string
  name?: string
}

const Button: React.FC<ButtonProps> = ({
  type = 'text',
  name = 'submit',
  value
}) => {
  return (
    <>
      <Field
        name={name}
        type={type}
        value={value}
        style={{
          background: '#40D67C',
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
          borderRadius: '20px',
          border: 'none',
          width: 'auto',
          height: '30px'
        }}
      />
    </>
  )
}

export default Button
