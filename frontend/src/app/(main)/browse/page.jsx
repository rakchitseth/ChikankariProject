"use client";
import { Badge, Button, Card, Container, Grid, Group, Image, Text , Slider, DEFAULT_THEME, ColorPicker} from '@mantine/core';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useParams } from 'next/navigation';
import useBrowseContext from '@/context/BrowseContext';



const Browse = () => {

  const { selPriceRange, filterByPrice, fetchWomenProducts, productList } = useBrowseContext();

  // console.log(selPriceRange);

  const { gender } = useParams();
  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState('#fff');

  useEffect(() => {
    fetchWomenProducts();
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
            <Text size='lg'>Filters</Text>
            <Card shadow="xs" radius="md" mt="xs" mb="xs" >
              <Text mb="xl">Price</Text>
            <Slider
              color="blue"
              labelAlwaysOn
              marks={[
              { value: 0, label: '0' },
              { value: 50, label: '5K' },
              { value: 80, label: '10K' },
              { value: 100, label: '15K' },
      ]}
    />      
       <Text mt="lg">Color</Text>    
      <ColorPicker
        
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />
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