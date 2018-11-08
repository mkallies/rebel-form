import * as React from 'react'
import { Field, Form, ErrorMessage, FieldProps, FormikProps } from 'formik'
import styled from 'styled-components'
import { Button, Input, FormMessage } from '../../../components'

type FormValues = {
  email: string
  name: string
  message: string
}

const ContactInfoInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 50px;
`

const StyledErrorMessage = styled.div`
  color: red;
  margin-top: 8px;
`

type Response = {
  success?: string
  error?: string
}

function FormUI(props: FormikProps<FormValues>) {
  const { status } = props

  return (
    <Form style={{ width: '100vh' }}>
      <ContactInfoInputContainer>
        <div>
          <Field
            name="name"
            render={({ field }: FieldProps<FormValues>) => (
              <Input label="Name" width="200px" {...field} />
            )}
          />
          <ErrorMessage name="name">
            {errorMessage => (
              <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            )}
          </ErrorMessage>
        </div>

        <div>
          <Field
            name="email"
            render={({ field }: FieldProps<FormValues>) => (
              <Input label="Email" width="200px" {...field} />
            )}
          />
          <ErrorMessage name="email">
            {errorMessage => (
              <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            )}
          </ErrorMessage>
        </div>
      </ContactInfoInputContainer>

      <Field
        name="message"
        render={({ field }: FieldProps<FormValues>) => (
          <Input label="Message" textarea={true} {...field} />
        )}
      />

      <ErrorMessage name="message">
        {errorMessage => (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
      </ErrorMessage>

      <ButtonContainer>
        <Button type="submit">Submit</Button>
      </ButtonContainer>

      {status && handleStatus(status)}
    </Form>
  )
}

function handleStatus(status: Response) {
  if (status.success) {
    return (
      <FormMessage
        message="Thank you for your submission"
        title="Form Completed"
        type="success"
      />
    )
  } else if (status.error) {
    return (
      <FormMessage message={status.error} title="Form Error" type="error" />
    )
  }

  return null
}

export default FormUI
