import * as React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'
import ContactForm from '../components/ContactForm'
import 'jest-dom/extend-expect'

// I wanted to try out react-testing-library, it provides light utility functions that encourages better testing practices

function getElements() {
  const { getByLabelText, getByText, queryByText } = render(<ContactForm />)

  const header = getByText('Contact Us')
  const name = getByLabelText(/name/i)
  const email = getByLabelText(/email/i)
  const msg = getByLabelText(/message/i)
  const btn = getByText('Submit')

  return { header, name, email, msg, btn, queryByText, getByText }
}

describe('ContactForm', () => {
  test('should render form with correct text', () => {
    const { header, name, email, msg } = getElements()

    expect(header).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(msg).toBeInTheDocument()
  })

  test('should submit when name, email and message are present and valid', () => {
    const { btn, name, email, msg, queryByText } = getElements()

    fireEvent.change(name, { target: { value: 'Rebel without a cause' } })
    fireEvent.change(email, { target: { value: 'rebel@rebellious.me' } })
    fireEvent.change(msg, {
      target: { value: 'a;dfjklkjlafsd;kjlfasdkdjl;fs' },
    })

    fireEvent.click(btn)

    const errorMessage = queryByText(/required/i)

    expect(errorMessage).toBeNull()
  })

  test('should not submit when name is missing', async () => {
    const { email, msg, btn, getByText } = getElements()

    fireEvent.change(email, { target: { value: 'rebel@rebellious.me' } })
    fireEvent.change(msg, {
      target: { value: 'a;dfjklkjlafsd;kjlfasdkdjl;fs' },
    })

    fireEvent.click(btn)

    const errorMessage = await waitForElement(() => getByText(/required/i))

    expect(errorMessage).toBeInTheDocument()
  })

  test('should not submit when email is not valid', async () => {
    const { name, email, msg, btn, getByText } = getElements()

    fireEvent.change(name, { target: { value: 'Rebel without a cause' } })
    fireEvent.change(email, { target: { value: 'rebel@rebellious' } })
    fireEvent.change(msg, {
      target: { value: 'a;dfjklkjlafsd;kjlfasdkdjl;fs' },
    })

    fireEvent.click(btn)

    const errorMessage = await waitForElement(() => getByText(/required/i))

    expect(errorMessage).toBeInTheDocument()
  })

  test('should not submit when message is missing', async () => {
    const { name, email, btn, getByText } = getElements()

    fireEvent.change(name, { target: { value: 'Rebel without a cause' } })
    fireEvent.change(email, { target: { value: 'rebel@rebellious' } })

    fireEvent.click(btn)

    const errorMessage = await waitForElement(() => getByText(/required/i))

    expect(errorMessage).toBeInTheDocument()
  })
})
