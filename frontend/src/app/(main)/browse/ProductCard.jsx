'use client';

import { Badge, Button, Card, Container, Grid, Group, Text, useHovered } from "@mantine/core";
import classes from './browse.module.css';
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons-react";
import useCartContext from "@/context/CartContext";

const ProductCard = ({ productData }) => {

  const { cartItems, addItem } = useCartContext();

  return (

      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <div className={classes.Container-useHovered}>

          <img className={classes.prodImg} src={`${process.env.NEXT_PUBLIC_API_URL}/${productData.image}`} alt="Tesla Model S" />
          </div>
        </Card.Section>

        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>{productData.title}</Text>
            <Text fz="xs" c="dimmed">
              {productData.description}
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            {productData.material}
          </Text>

          <Group gap={8} mb={-8}>
            {/* {features} */}
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group gap={30}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                ₹{productData.price}
              </Text>
              <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                per piece
              </Text>
            </div>
            
            <Button component={Link} href={'/productdetails/'+productData._id} radius="xl" style={{ flex: 1 }} className={Button}>
              View More
            </Button>
          </Group >
            <Button radius="xl"  mt={2} style={{ flex: 1 }} onClick={() => addItem(productData)}>
              Add to Cart <IconShoppingCart />
            </Button>
        </Card.Section>
      </Card>
  );
}

export default ProductCard;