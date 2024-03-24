'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination, Autoplay } from 'swiper/modules';
import { Navbar } from './navbar';
import { Container, Grid, Text, Title } from '@mantine/core';
import classes from './page.module.css';

const categoryData = [
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  },
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  },
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  },
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  },
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  },
  {
    name: 'Kurti',
    image: 'https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp',
    link: ''
  }
]

const Home = () => {
  return (
    <>
      <Navbar />

      <Container p={10} size={'xl'}>
        <Grid gutter="lg">
          {
            categoryData.map(category => (
              <Grid.Col span={{md: 2, sm: 6}}>
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
      </div>
    </>
  );
}



export default Home;