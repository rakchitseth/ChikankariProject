'use client';

import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";
import classes from './browse.module.css';
import Link from "next/link";

const ProductCard = ({ productData }) => {
  return (

      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <img className={classes.prodImg} src={`${process.env.NEXT_PUBLIC_API_URL}/${productData.image}`} alt="Tesla Model S" />
        </Card.Section>

        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>Tesla Model S</Text>
            <Text fz="xs" c="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            Basic configuration
          </Text>

          <Group gap={8} mb={-8}>
            {/* {features} */}
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group gap={30}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                $168.00
              </Text>
              <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                per day
              </Text>
            </div>
            <Link href='/productdetails'>
            <Button radius="xl" style={{ flex: 1 }}  >
              More details
            </Button>
            </Link>
          </Group>
        </Card.Section>
      </Card>
  );
}

export default ProductCard;