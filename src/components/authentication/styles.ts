import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Square = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    width: 350px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px lightgrey;
  `}
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ToRegister = styled.div`
  position: relative;
  bottom: -45px;
`

export const Register = styled.span`
  padding-left: 5px;
  color: lightblue;
  cursor: pointer;
`
