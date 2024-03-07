"use client";
import { Badge, Button, Card, Container, Grid, Group, Image, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import { useParams } from 'next/navigation';



const Browse = () => {

  const { gender } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    if (window !== undefined) {
      setLoading(true);
      const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getbygender/${gender}`)
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
    fetchProducts();
  }, []);


  const showDetails = () => {
    if (!loading) {
      return (
        productList.map(product => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 3 }} key={product._id}>
            <ProductCard productData={product} key={product._id} />
          </Grid.Col>
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
      
        <Grid>
          <Grid.Col span={{ md: 3 }}>
            <Card shadow="xs" radius="md">

            </Card>
          </Grid.Col>
          <Grid.Col span={{ md: 9 }}>
            <Grid>
              {showDetails()}
            </Grid>
          </Grid.Col>
        </Grid>

    </div>
  )
}

export default Browse;