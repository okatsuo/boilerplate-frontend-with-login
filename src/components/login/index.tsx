import { Formik, Form, Field } from 'formik'
import { Container } from '../container'
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
              >
                {() => (
                  <Form>
                    <Styles.Items>
                      <Field id= "email" name ="email" type="text" placeholder="email"/>
                      <Field id= "password" name ="password" type="password" placeholder="senha"/>
                      <Field id= "rememberMe" name ="rememberMe" type="checkbox" placeholder="teste"/> lembrar-me
                      <Field type="submit" value="ENTRAR"/>
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