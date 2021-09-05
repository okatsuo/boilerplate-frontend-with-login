import { parseCookies } from 'nookies'
import { jwtDecode } from '../../utils/JWT'
import { Container } from '../container'
import * as Styles from './styles'

const Header = () => {
  const cookies = (parseCookies()).t_user
  const user = jwtDecode(cookies) // TODO remember to change the backend to return JWT with email as well
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Container>
          <Styles.UserInfo>
            <div>
              email@example.com
            </div>
            <div>
              sair
            </div>
          </Styles.UserInfo>
        </Styles.Container>
      </Container>
    </Styles.Wrapper>

  )
}

export default Header
