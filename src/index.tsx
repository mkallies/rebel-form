import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { hot } from 'react-hot-loader'
import ContactForm from './features/contact-us/components/ContactForm'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Montserrat';
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

  button, input, submit {
    border: none;
  }
`

const Root = hot(module)(() => (
  <React.Fragment>
    <GlobalStyles />
    <ContactForm />
  </React.Fragment>
))

ReactDOM.render(<Root />, document.getElementById('root'))
