import { string, object } from 'yup'

function formSchema() {
  return object().shape({
    name: string().required('A name is required'),
    email: string()
      .email('A valid email is required')
      .required('E-mail is required'),
    message: string().required('Message is required'),
  })
}

export default formSchema
