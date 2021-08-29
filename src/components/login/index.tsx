import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container } from '../container'
import InputForm from '../forms/inputs'
import Button from '../forms/button'
import * as Styles from './styles'
interface ILogin {
  email: string
  password: string
  rememberMe: boolean
}

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(3).required()
})

const Login = () => {
  const handleSubmit = (values: ILogin): void => {
    console.log('valores:', values)
    const user = {
      email: values.email,
      password: values.password,
      rememberMe: values.rememberMe
    }

    console.log('user trying to login: ', user)
  }

  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Content>
          <Styles.Square>
            <Formik
              initialValues={{
                email: '',
                password: '',
                rememberMe: false
              }}
              onSubmit={(values) => {
                handleSubmit(values)
              }}
              validationSchema={schema}
            >
              {({ errors, touched }) => (
                <Form>
                  <Styles.Items>
                    <InputForm name="email" type="text" placeholder="email" />
                    {errors.email && touched.email && errors.email}

                    <InputForm name="password" type="password" placeholder="senha" />
                    {errors.password && touched.password && errors.password}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <InputForm name="rememberMe" type="checkbox" placeholder="teste" /> lembrar-me
                    </div>

                    <Button type="submit" value="ENTRAR" />
                  </Styles.Items>
                </Form>
              )}
            </Formik>
          </Styles.Square>
        </Styles.Content>
      </Container>
    </Styles.Wrapper>
  )
}

export default Login
