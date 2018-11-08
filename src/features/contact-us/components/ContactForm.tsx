import * as React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import { Header } from '../../../components'
import FormUI from './FormUI'
import formSchema from '../formSchema'
import { INITIAL_FORM_VALUES, SUCCESS_URL } from '../constants'
import { sleep } from '../../../utils/helpers'

// I wanted to use Formik here, I know it's overkill for this simple form but I wanted to try something new!
// I can see how it would ease the pain of writing many forms

const ContactFormContainer = styled.div`
  width: 500px;
  display: flex;
  flex-flow: wrap;
  padding: 25px
  box-shadow: -1px 3px 21px 6px rgba(217, 217, 217, 1);
  border-radius: 5px;

  @media (max-width: 700px) {
    width: 350px
  }
`

function ContactForm() {
  return (
    <div>
      <ContactFormContainer>
        <Header>Contact Us</Header>

        <Formik
          initialValues={INITIAL_FORM_VALUES}
          onSubmit={async (values, actions) => {
            try {
              const response = await fetch(SUCCESS_URL)
              const data = await response.json()
              actions.setStatus(data)

              await sleep(2000)

              actions.resetForm()
            } catch (err) {
              // handle err - send to a bug service like sentry
            }
          }}
          render={FormUI}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={formSchema()}
        />
      </ContactFormContainer>
    </div>
  )
}

export default ContactForm
