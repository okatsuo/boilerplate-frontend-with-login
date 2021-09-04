import { Field } from 'formik'
import * as Styles from './styles'

interface CheckboxProps {
  name: string
  message?: string
  required?: boolean
  styles?: React.CSSProperties
}

const CheckboxForm: React.FC<CheckboxProps> = ({
  name,
  message = 'click-me',
  required,
  styles = {}
}) => {
  return (
    <Styles.Wrapper>
      <Field
        name={name}
        required={required}
        type='checkbox'
        style={{
          ...styles
        }}
      />
      {message}
    </Styles.Wrapper>
  )
}

export default CheckboxForm
