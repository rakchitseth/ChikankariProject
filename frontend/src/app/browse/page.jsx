"use client";
import { Badge, Button, Card, Container, Grid, Group, Image, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';



const Browse = () => {

  // const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getall`);
    console.log(res.status);
    const data = await res.json();

    console.log(data);
    setProductList(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  const showDetails = async () => {
    if (!loading) {
      return (
        productList.map(product => (
          <ProductCard productData={product} key={product._id} />
        ))
      )
    } else {
      return (
        <Text>Loading</Text>
      )
    }
  }

  return (
    <div>
      <Container>

        <Grid>
          <Grid.Col span={{ md: 3 }}>
            <Card shadow="xs" radius="md">

            </Card>
          </Grid.Col>
          <Grid.Col span={{ md: 9 }}>
            {showDetails()}
          </Grid.Col>
        </Grid>

      </Container>
    </div>
  )
}

export default Browse;