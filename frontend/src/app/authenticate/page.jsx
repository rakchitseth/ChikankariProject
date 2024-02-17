'use client';
import { Anchor, Checkbox, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import './auth.css';
const Authenticate = () => {

    const [type, setType] = useState('register');

    const signupForm = useForm({
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

    const signupSubmit = (values) => {
        console.log(values);
    }

    return ( 
        <div className='card'>

        <Paper radius="md" p="xl" withBorder>
            <Text size="lg" fw={500}>
                Welcome to CK Sewa Chikan Industries , {type} with
            </Text>

            <Group grow mb="md" mt="md">
                {/* <GoogleButton radius="xl">Google</GoogleButton>
                <TwitterButton radius="xl">Twitter</TwitterButton> */}
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form onSubmit={signupForm.onSubmit(signupSubmit)}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            value={signupForm.values.name}
                            onChange={(event) => signupForm.setFieldValue('name', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={signupForm.values.email}
                        onChange={(event) => signupForm.setFieldValue('email', event.currentTarget.value)}
                        error={signupForm.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={signupForm.values.password}
                        onChange={(event) => signupForm.setFieldValue('password', event.currentTarget.value)}
                        error={signupForm.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={signupForm.values.terms}
                            onChange={(event) => signupForm.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>

                </Group>
            </form>
        </Paper>
      </div>
    )
}

export default Authenticate;