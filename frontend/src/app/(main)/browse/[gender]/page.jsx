"use client";
import { ActionIcon, Badge, Box, Button, Card, Container, Grid, Group, Image, Text, TextInput, rem, useMantineTheme } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import { useParams } from 'next/navigation';
import useBrowseContext from '@/context/BrowseContext';
import { IconSearch } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';
import useCartContext from '@/context/CartContext';



const Browse = () => {

  const { selPriceRange, filterByPrice, fetchWomenProducts, productList } = useBrowseContext();
  const { cartItems, addItem } = useCartContext();


  const { gender } = useParams();
  const [loading, setLoading] = useState(false);

  const theme = useMantineTheme();


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
      <Box py={30}>
        <Container size='lg'>
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search questions"
            rightSectionWidth={42}
            leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            rightSection={
              <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            }
          />
        </Container>
      </Box>

      <Grid>
        <Grid.Col span={{ md: 12 }}>
          <Grid>
            {showDetails()}
          </Grid>
        </Grid.Col>
      </Grid>

    </div>
  )
}

export default Browse;