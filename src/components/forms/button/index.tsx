import { Field } from 'formik'

interface ButtonProps {
  type?: string
  value?: string
}

const Button: React.FC<ButtonProps> = ({
  type = 'text',
  value
}) => {
  return (
    <>
      <Field
        type={type}
        value={value}
        style={{
          background: '#40D67C',
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
          borderRadius: '20px',
          border: 'none',
          width: '100px',
          height: '30px'
        }}
      />
    </>
  )
}

export default Button
