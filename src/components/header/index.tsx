import Router from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import { jwtDecode } from '../../utils/JWT'
import { Container } from '../container'
import * as Styles from './styles'

const Header = () => {
  const cookies = (parseCookies()).t_user
  const user = jwtDecode(cookies)

  const logout = async () => {
    destroyCookie(null, 't_user')
    await Router.push('/login')
  }

  return (
    <Styles.Wrapper>
      <Container>
        <Styles.Container>
          <Styles.UserInfo>
            <div>
              {user?.email}
            </div>
            <Styles.Logout onClick={async () => await logout()}>
              sair
            </Styles.Logout>
          </Styles.UserInfo>
        </Styles.Container>
      </Container>
    </Styles.Wrapper>

  )
}

export default Header
