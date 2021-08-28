import { Container } from '../container'
import * as Styles from './styles'

const Login = () => {
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Content>
          <Styles.Square>
            <Styles.Items>
              <input type="text" name="email" id="email" placeholder="email"/>
              <input type="password" name="password" id="password" placeholder="senha"/>
              <input type="checkbox" name="rememberMe" id="rememberMe"/> lembrar-me
              <input type="button" value="ENTRAR" />
            </Styles.Items>
          </Styles.Square>
        </Styles.Content>
      </Container>
    </Styles.Wrapper>
  )
}

export default Login