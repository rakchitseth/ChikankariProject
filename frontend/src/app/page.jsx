'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination, Autoplay } from 'swiper/modules';
import { Navbar } from './navbar';
import { Avatar, Box, Container, Grid, Group, Rating, Text, Title, rem, useMantineTheme } from '@mantine/core';
import classes from './page.module.css';
import Link from 'next/link';
import Features from './Features';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import About from './AboutChikankari';

const categoryData = [
  {
    name: 'Kurti',
    image: 'https://imgs.search.brave.com/zaEwScMl_5VJwr-vcxvAow-ARc-mhe2O-6s8UfS3IRo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE1MncyRm5EY0wu/anBn',
    link: ''
  },
  {
    name: 'Kurti Sets',
    image: 'https://imgs.search.brave.com/hmSFEOqfPQNmIrbXYfUiq-UGlbYAMHUlTwlZNVtWXtE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ob3Vz/ZW9ma2FyaS5pbi9j/ZG4vc2hvcC9wcm9k/dWN0cy8wNTdBNjY5/OF81ZjhkNzE5MS1l/ZmRkLTRlOGItYWUy/Zi03MjNhODNkNGUy/MzZfNTAweC5qcGc_/dj0xNjkwOTU3MTcw',
    link: ''
  },
  {
    name: 'Short Kurti',
    image: 'https://imgs.search.brave.com/gYrXhJAZ132anMIVMr3QtnCcZeauo4ilQc2WBmd__mw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvMTM1Mjgx/OTE0L2FzbTRqXzQw/MC5qcGc',
    link: ''
  },
  {
    name: 'Mens Kurta Sets',
    image: 'https://imgs.search.brave.com/Gn2E9eySVMNbme9Lu0z58Yv_QbqIoTltPzyMcji68dY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVj/aGlrYW5sYWJlbC5j/b20vY2RuL3Nob3Av/ZmlsZXMvQmxhY2tT/aGFhbkNoYW5kZXJp/TWVuc0NoaWthbmth/cmlLdXJ0YV9MdWNr/bm93Q2hpa2Fua2Fy/aU1lbnNfS3VydGFQ/eWphbWFTZXRfMS5q/cGc_dj0xNzA3ODkz/ODA1JndpZHRoPTgz/Ng',
    link: ''
  },
  {
    name: 'Sarees',
    image: 'https://imgs.search.brave.com/Vol_VSPzW5kvRowy8Mz7LZRQKAPVRnGgJC94wUeAUSQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0R29VOFJGWUwu/anBn',
    link: ''
  },
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  }
];

const TestimonialCard = () => {
  return <Box>
    <Rating value={4} />
    <Text size="lg" mt={5} mb={5}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore autem repellat iusto minima quasi, officia quam vel eveniet maiores cupiditate.
    </Text>
    <Group>
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        radius="xl"
      />

      <div style={{ flex: 1 }}>
        <Text size="sm" fw={500}>
          Harriette Spoonlicker
        </Text>

        <Text c="dimmed" size="xs">
          hspoonlicker@outlook.com
        </Text>
      </div>
    </Group>
  </Box>
}

const Home = () => {

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <>
      <Navbar />

      <Container p={10} size={'xl'}>
        <Grid gutter="lg">
          {
            categoryData.map(category => (
              <Grid.Col span={{ md: 2, sm: 6 }}>
                <img className={classes.categoryIcon} src={category.image} alt="" />
                <Title order={3} align="center">{category.name}</Title>
              </Grid.Col>
            ))
          }
        </Grid>
      </Container>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://morachikankari.com/wp-content/uploads/2023/12/Homepage-BannerNY.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp" alt="" /></SwiperSlide>
      </Swiper>

      <div>
        <Container p={10} size={'xl'}>
          <Title order={1} align="center">The World's #1 Embroidery On A Fabric -"ChikanKari"</Title>
          <Text align="center">From #1 Chikankari Brand- CK Sewa Chikan Industries</Text>
          <Title order={1} align="center">Best Seller</Title>
          <Grid gutter="lg">
          </Grid>
        </Container>
        <Link href="/admin">Admin</Link>
      </div>
      <Features />
      <Container py={20}>
        <Carousel
          slideSize={{ base: '100%', sm: '50%' }}
          slideGap={{ base: rem(2), sm: 'xl' }}
          align="start"
          slidesToScroll={1}
        >
          <Carousel.Slide>
            <TestimonialCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <TestimonialCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <TestimonialCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <TestimonialCard />
          </Carousel.Slide>
        </Carousel>
      </Container>
        <About />
    </>
  );
}



export default Home;