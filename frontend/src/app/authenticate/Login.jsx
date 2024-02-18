'use client';
import { Anchor, Button, Checkbox, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Login = ({ setType }) => {

  const LoginForm = useForm({
      initialValues: {
          email: '',
          name: '',
          password: '',
          terms: true,
      },
      validate: {
          email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
          password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
      },
  })

  const LoginSubmit = async (values) => {
      console.log(values);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/add`);
      if (res.status === 200) {
          enqueueSnackbar('Logged in successfully', { variant: 'success' });
      } else {
          enqueueSnackbar('Some Error occured', { variant: 'error' });
      }

  }

  return (
    <div>
            
            <form onSubmit={LoginForm.onSubmit(LoginSubmit)}>
                <Stack gap={'xl'}>
                  
                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={LoginForm.values.email}
                        onChange={(event) => signupForm.setFieldValue('email', event.currentTarget.value)}
                        error={LoginForm.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={LoginForm.values.password}
                        onChange={(event) => signupForm.setFieldValue('password', event.currentTarget.value)}
                        error={LoginForm.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                    <Checkbox
                        label="Keep me logged in"
                        checked={LoginForm.values.terms}
                        onChange={(event) => signupForm.setFieldValue('terms', event.currentTarget.checked)}
                    />

                    <Button color='pink' type='submit'>Login</Button>

                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => setType('Signup')} size="xs">
                        'dont't have an account? Signup'
                    </Anchor>

                </Group>
            </form>
        </div>
  )
}

export default Login