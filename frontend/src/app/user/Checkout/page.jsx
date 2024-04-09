'use client';
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container,NativeSelect } from '@mantine/core';
// import bg from './bg.svg';
import classes from './Checkoutpage.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'; 
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';


const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
  });

function CheckoutPage() {

    const [selFile, setSelFile] = useState('');

    const formik = useFormik({
        initialValues: {
            name: '',
            country: '' ,
            address: '',
            city: '',
            state: '',
            pincode: '',
            email: '',
            phone: '',
        },
        validationSchema: CheckoutSchema,
        onSubmit: async (values, { resetForm }) => {
           
            console.log(values);
            // setTimeout(() => {
            //   resetForm();
            // },3000);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/add`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json' }
            });

            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar('Succesfully Registered', { variant: 'success' })
            }
            else {
                enqueueSnackbar("Error Occured", { variant: "error" })
            }
        },
    });

    // console.log(formik.errors);

    return (
        <Container>
            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts} >
                        <Text fz="lg" fw={700} className={classes.title} c="#fff">
                            Checkout information
                        </Text>


                    </div>

                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <Text fz="lg" fw={700} className={classes.title}>
                            Checkout Details
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                                <TextInput
                                    mt="md"
                                    label="Name"
                                    placeholder="Name"
                                    required
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    name="name"
                                    error={formik.errors.name}
                                />
                                <TextInput
                                    mt="md"
                                    label="Country"
                                    placeholder="Country"
                                    required
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    name="country"
                                    error={formik.errors.country}
                                />
                                <TextInput
                                    mt="md"
                                    label="Address"
                                    placeholder="Address"
                                    required
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    name="address"
                                    error={formik.errors.address}
                                />
                                <TextInput
                                    mt="md"
                                    label="City"
                                    placeholder="City"
                                    required
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    name="city"
                                    error={formik.errors.city}
                                />
                                <TextInput
                                    mt="md"
                                    label="State"
                                    placeholder="State"
                                    required
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    name="state"
                                    error={formik.errors.state}
                                />
                                <TextInput
                                    mt="md"
                                    label="Pincode"
                                    placeholder="Pincode"
                                    required
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    name="pincode"
                                    error={formik.errors.pincode}
                                    />
                                <TextInput
                                    mt="md"
                                    label="Email"
                                    placeholder="Email"
                                    required
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name="email"
                                    error={formik.errors.email}
                                />
                                <TextInput
                                    mt="md"
                                    label="Phone"
                                    placeholder="Phone"
                                    required
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    name="phone"
                                    error={formik.errors.phone}
                                />


                            </SimpleGrid>

                            {/* <TextInput mt="md" label="Subject" placeholder="Subject" required /> */}

                            {/* <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                            /> */}


                            <Group justify="flex-end" mt="md">
                                <Button type="submit" disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? 'submitting...' : 'submit'}
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}

export default CheckoutPage;  