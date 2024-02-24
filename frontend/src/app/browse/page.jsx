"use client";
import { Badge, Button, Card, Container, Grid, Group, Image, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';



const Browse = () => {

  // const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchProducts = () => {
    if (window !== undefined) {
      setLoading(true);
      const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getall`)
        .then((result) => result.json())
        .then(data => {
          console.log(data);
          setProductList(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

    }
  }

  useEffect(() => {
    // fetchProducts();
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
      <h1>Browse Product</h1>
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