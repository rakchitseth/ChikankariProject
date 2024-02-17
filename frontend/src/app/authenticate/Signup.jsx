'use client';
import { Anchor, Checkbox, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'

const Signup = ({setType}) => {

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

    const signupSubmit = async (values) => {
        console.log(values);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/add`)

    }

    return (
        <div>
            <form onSubmit={signupForm.onSubmit(signupSubmit)}>
                <Stack>
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        value={signupForm.values.name}
                        onChange={(event) => signupForm.setFieldValue('name', event.currentTarget.value)}
                        radius="md"
                    />

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

                    <Checkbox
                        label="I accept terms and conditions"
                        checked={signupForm.values.terms}
                        onChange={(event) => signupForm.setFieldValue('terms', event.currentTarget.checked)}
                    />
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => setType('Login')} size="xs">
                        'Already have an account? Login'
                    </Anchor>

                </Group>
            </form>
        </div>
    )
}

export default Signup