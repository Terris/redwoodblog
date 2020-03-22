import { useState } from 'react'
import {
  Form,
  TextField,
  Submit,
  FieldError,
  Label,
  FormError,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import BlogLayout from 'src/layouts/BlogLayout'

import { auth } from '../../auth'

const SignupPage = (props) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    auth
      .signup(data.email, data.password)
      .then((response) => {
        console.log('Confirmation email sent', response)
        setLoading(false)
      })
      .catch((error) => {
        setError(JSON.stringify(error))
        setLoading(false)
      })
  }

  return (
    <BlogLayout>
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label
          name="email"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Email
        </Label>
        <TextField
          name="email"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" style={{ color: 'red' }} />

        <Label
          name="password"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Password
        </Label>
        <TextField
          name="password"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{
            required: true,
          }}
        />
        <FieldError name="password" style={{ color: 'red' }} />

        <Submit style={{ display: 'block' }} disabled={loading}>
          Save
        </Submit>
      </Form>
    </BlogLayout>
  )
}

export default SignupPage
