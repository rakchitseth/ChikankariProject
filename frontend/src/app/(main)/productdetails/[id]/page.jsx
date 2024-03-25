'use client';
import { Card, Image, Avatar, Text, Group, Loader, Box, Grid, Container, Title, Flex, Stack, Button, ActionIcon } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useCartContext from '@/context/CartContext';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

const ArticleCardVertical = () => {

  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const { cartItems, addItem, checkItemExists } = useCartContext();

  const router = useRouter();

  const getProductDetails = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetails(data);
      });
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  const displayStock = (stockNum) => {
    if (stockNum > 0) {
      return <Text ml="auto" mt="auto" fw={700} c='green'>In Stock</Text>
    } else {
      return <Text ml="auto" mt="auto" fw={700} c='red'>Out of Stock</Text>
    }
  }

  const displayProductDetails = () => {
    if (productDetails !== null) {
      return (
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
          <Grid.Col span={{ md: 6, sm: 12 }}>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${productDetails.image[0]}`}
              width={'100%'}
            />
          </Grid.Col>
          <Grid.Col span={{ md: 6, sm: 12 }}>
            <ActionIcon mb={'xl'} size={'lg'} onClick={
              () => {
                router.back();
              }
            } variant="filled" aria-label="Previous Page">
              <IconArrowLeft style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <Title order={2}>
              {productDetails.title}
            </Title>
            <Text className={classes.description} mt="xs" mb="md">
              {productDetails.description}
            </Text>
            <Flex>
              <Title order={1} mb="md">
                ₹{productDetails.price}
              </Title>
              {
                displayStock(productDetails.stock)
              }
            </Flex>

            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} >
              <Grid.Col span={3}>
                <Text c='dimmed' fw={700}>Material : </Text>
              </Grid.Col>
              <Grid.Col span={9} tt={'capitalize'}>
                <Text fw={700}>{productDetails.material}</Text>
              </Grid.Col>
            </Grid>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} >
              <Grid.Col span={3}>
                <Text c='dimmed' fw={700}>Color : </Text>
              </Grid.Col>
              <Grid.Col span={9} tt={'capitalize'}>
                <Text fw={700}>{productDetails.color}</Text>
              </Grid.Col>
            </Grid>

            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} >
              <Grid.Col span={3}>
                <Text c='dimmed' fw={700}>Embroidery : </Text>
              </Grid.Col>
              <Grid.Col span={9} tt={'capitalize'}>
                <Text fw={700}>{productDetails.embroidery}</Text>
              </Grid.Col>
            </Grid>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} >
              <Grid.Col span={3}>
                <Text c='dimmed' fw={700}>Stitched : </Text>
              </Grid.Col>
              <Grid.Col span={9} tt={'capitalize'}>
                <Text fw={700}>{productDetails.stitched ? 'Yes' : 'No'}</Text>
              </Grid.Col>
            </Grid>


            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} >
              <Grid.Col span={3}>
                <Text c='dimmed' fw={700}>Size : </Text>
              </Grid.Col>
              <Grid.Col span={9} tt={'capitalize'}>
                <Text fw={700}>{productDetails.size}</Text>
              </Grid.Col>
            </Grid>

            <Stack direction="horizontal" spacing="md" mt="lg">
              <Button
                disabled={checkItemExists(productDetails._id)}
                onClick={() => {
                  addItem(productDetails);
                }}
                radius="xl"
                size="lg"
                variant="outline"
                color="blue"
              >
                Add to Cart
              </Button>
              <Button
                component={Link}
                href={'/user/cartpage'}
                disabled={cartItems.length === 0}
                radius="xl"
                size="lg"
                variant="filled"
                color="blue"
              >
                View Cart
              </Button>
            </Stack>

          </Grid.Col>
        </Grid>
      )
    } else {
      return <Loader />
    }
  }

  return (
    <Box>
      <Container py={50} size={'xl'}>

        {displayProductDetails()}
      </Container>
    </Box>
  );
}

export default ArticleCardVertical;