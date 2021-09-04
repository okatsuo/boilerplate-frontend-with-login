import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useApollo } from '../../../graphql/client'
import { USER_CREATE } from '../../../graphql/mutations/createUser'
import Button from '../../forms/button'
import InputForm from '../../forms/inputs'
import sweetAlert from '../../../utils/window-alert'
import * as Styles from '../styles'

const initialValues = {
  email: '',
  password: '',
  name: '',
  passwordConfirmation: ''
}

interface registerFields {
  email: string
  password: string
  name: string
  passwordConfirmation: string
}

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirmation: Yup.string().required()
})

const Register = () => {
  const apolloClient = useApollo()
  const handleSubmit = async (values: registerFields) => {
    if (values.password === values.passwordConfirmation) {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password
      }
      try {
        const { data } = await apolloClient.mutate({
          mutation: USER_CREATE,
          variables: user
        })
        const { userCreate } = data
        await sweetAlert({
          title: `Boa ${userCreate.name}`,
          icon: 'success',
          text: 'muito bem vindo(a)!'
        })
      } catch (error) {
        await sweetAlert({
          title: 'Opa...',
          icon: 'error',
          text: `${error}`
        })
      }
    } else {
      await sweetAlert({
        title: 'Opa...',
        icon: 'question',
        text: 'a confirmação da senha está errada'
      })
    }
  }

  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.Square>
          <Formik initialValues={initialValues}
            onSubmit={async (values) => {
              await handleSubmit(values)
            }}
            validationSchema={schema}
          >
            {({ errors, touched }) => (
              <Form>
                <Styles.Items>
                  <InputForm name='name' type='text' placeholder='name' />
                  {errors.name && touched.name && errors.name}

                  <InputForm name='email' type='text' placeholder='email' />
                  {errors.email && touched.email && errors.email}

                  <InputForm name='password' type='password' placeholder='password' />
                  {errors.password && touched.password && errors.password}

                  <InputForm name='passwordConfirmation' type='password' placeholder='confirmação da senha' />
                  {errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation}

                  <Button name='submit' type='submit' value='CADASTRAR' />
                </Styles.Items>
              </Form>
            )}
          </Formik>
        </Styles.Square>
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default Register
