'use client';
import { Card, Image, Avatar, Text, Group, Loader } from '@mantine/core';
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
        setProductDetails(data);
      });
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  const displayProductData = () => {
    if(productDetails !== null){
      return (
        <Group wrap="nowrap" gap={0}>
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          height={400}
            width={400}
        />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            technology
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {productDetails.title}
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
    }else{
      return <Loader />
    }
  }

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      {displayProductData()}
    </Card>
  );
}

export default ArticleCardVertical;