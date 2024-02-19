'use client';
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container } from '@mantine/core';
// import bg from './bg.svg';
import classes from './addproduct.module.css';
import { DropzoneButton } from './Dropzone';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'; 
import { enqueueSnackbar } from 'notistack';


const LoginSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
    // image: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    material: Yup.string().required('Required'),
    embroidery: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    // stiched: Yup.boolean().required('Required'),
    discount: Yup.number(),
    gender: Yup.string().required('Required'),
    stock: Yup.number().required('Required'),
  });

function AddProduct() {
    const formik = useFormik({
        initialValues: {
            title: '',
            image:['nice.png'],
            description: '' ,
            material: '',
            embroidery: '',
            price: '',
            stitched: true,
            discount: '',
            gender:'',
            stock: '',
            sizes: '',
        },
        validationSchema: LoginSchema,
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
            {process.env.NEXT_PUBLIC_API_URL}
            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts} >
                        <Text fz="lg" fw={700} className={classes.title} c="#fff">
                            Contact information
                        </Text>


                    </div>

                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <Text fz="lg" fw={700} className={classes.title}>
                            Add the product
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                                <TextInput label="Product Name" placeholder="Product Name" id="title" required onChange={formik.handleChange} value={formik.values.title} />
                                <TextInput label="Product Description" placeholder="description" id="description" required  onChange={formik.handleChange} value={formik.values.description} />
                                <TextInput label="Material" placeholder=" Material description" id="material" required  onChange={formik.handleChange} value={formik.values.material} />
                                <TextInput label="Embroidery type" placeholder="Type of embroidery" id="embroidery" required  onChange={formik.handleChange} value={formik.values.embroidery} />
                                <TextInput label="Price" id="price" required  onChange={formik.handleChange} value={formik.values.price} />
                                <TextInput label="Stitched" placeholder="stitching type" id="stitched" required  onChange={formik.handleChange} value={formik.values.stitched} />
                                <TextInput label="gender"   id="gender" required  onChange={formik.handleChange} value={formik.values.gender } />
                                <TextInput label="stock" placeholder="Quantity of product" id="stock" required onChange={formik.handleChange} value={formik.values.stock} />
                                <TextInput label="Sizes" placeholder="Sizes available" id="sizes" required onChange={formik.handleChange} value={formik.values.sizes} />
                                <TextInput label="discount" placeholder="Discount code" id="discount" required  onChange={formik.handleChange} value={formik.values.discount} />
                            </SimpleGrid>

                            {/* <TextInput mt="md" label="Subject" placeholder="Subject" required /> */}

                            {/* <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                            /> */}

                            <DropzoneButton />

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

export default AddProduct;