import * as React from 'react'
import styled from 'styled-components'

type FormMessageProps = {
  title: string
  message: string
  type: string
}

type SuccessProp = {
  success: boolean
}

const Container = styled.div<SuccessProp>`
  box-shadow: ${props =>
    `0 0 0 1px ${
      props.success ? '#a3c293 ' : '#e0b4b4'
    } inset, 0 0 0 0 transparent`};
  color: ${props => (props.success ? '#2c662d' : '#9f3a38')};
  background-color: ${props => (props.success ? '#fcfff5' : '#fff6f6')};
  margin-top: 25px;
`

const Content = styled.div`
  font-size: 14px;
  padding: 10px;

  & p {
    margin-bottom: 0;
  }
`

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
`

function FormMessage({ title, message, type }: FormMessageProps) {
  const success = type === 'success'

  return (
    <Container success={success}>
      <Content>
        <Header>{title}</Header>
        <p>{message}</p>
      </Content>
    </Container>
  )
}

export default FormMessage
