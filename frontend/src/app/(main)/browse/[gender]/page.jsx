"use client";
import { Badge, Button, Card, Container, Grid, Group, Image, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import { useParams } from 'next/navigation';
import useBrowseContext from '@/context/BrowseContext';



const Browse = () => {

  const { selPriceRange, filterByPrice, fetchWomenProducts, productList } = useBrowseContext();


  const { gender } = useParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (gender === 'women')
      fetchWomenProducts();
  }, [gender]);


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
      

      <Grid>
        <Grid.Col span={{ md: 3 }}>
          
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