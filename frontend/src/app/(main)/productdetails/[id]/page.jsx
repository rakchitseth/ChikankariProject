'use client';
import { Card, Image, Avatar, Text, Group, Loader, Box, Grid } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ArticleCardVertical = () => {

  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);

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

  const displayProductData = () => {
    if (productDetails !== null) {
      return (
        <Group wrap="nowrap" gap={0}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}/${productDetails.image[0]}`}
            height={400}
            width={400}
          />
          <div className={classes.body}>
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              {productDetails.title}
            </Text>
            <Text className={classes.description} mt="xs" mb="md">
              {productDetails.description}
            </Text>
            <Text className={classes.price} mt="xs" mb="md">
              {productDetails.material}
            </Text>
            <Text className={classes.price} mt="xs" mb="md">
              ₹{productDetails.price}
            </Text>
            <Group wrap="nowrap" gap="xs">
              <Group gap="xs" wrap="nowrap">
                <Avatar
                  size={20}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                />
                <Text size="xs">Elsa Typechecker</Text>
              </Group>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
            </Group>
          </div>
        </Group>
      )
    } else {
      return <Loader />
    }
  }

  const displayProductDetails = () => {
    if(productDetails !== null) {
      return (
        <Grid>
            <Grid.Col span={{md : 6, sm: 12}}>
                
            </Grid.Col>
            <Grid.Col span={{md : 6, sm: 12}}>

            </Grid.Col>
        </Grid>
      )
    }
  }

  return (
    <Box withBorder radius="md" p={0} className={classes.card}>
      {displayProductData()}
    </Box>
  );
}

export default ArticleCardVertical;