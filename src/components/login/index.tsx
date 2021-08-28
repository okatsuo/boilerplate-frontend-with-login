import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Container } from '../container'
import CustomForm from '../forms'
import * as Styles from './styles'

const initialValues = {
  email: '',
  password: '',
  rememberMe: false
}
interface ILogin {
  email: string,
  password: string,
  rememberMe: boolean
}

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(3).required(),
})

const Login = () => {
  const handleSubmit = (values: ILogin) => {
    console.log("valores:", values);
    const user = {
      email: values.email,
      password: values.password,
      rememberMe: values.rememberMe
    }

    console.log("user trying to login: ",user);
  } 

  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Content>
          <Styles.Square>
              <Formik 
                initialValues={initialValues}
                onSubmit={(values) => {
                  handleSubmit(values) 
                }}
                validationSchema={schema}
              >
                {({errors, touched}) => (
                  <Form>
                    <Styles.Items>
                      <CustomForm name="email" type="text" placeholder="email"/>
                      {errors.email && touched.email && errors.email}

                      <CustomForm name="password" type="password" placeholder="senha"/>
                      {errors.password && touched.password && errors.password}

                      <CustomForm name ="rememberMe" type="checkbox" placeholder="teste"/> lembrar-me

                      <CustomForm type="submit" value="ENTRAR"/>
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