"use client";
import React, { useEffect, useState } from 'react';
import { Container, Title, Text, Paper, Grid, Loader, Timeline, Select } from '@mantine/core';
import { IconCircleCheckFilled, IconPackageExport, IconTruck, IconTruckLoading } from '@tabler/icons-react';

const ManageOrders = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPaymentHistory = async () => {
    setLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getall`);
    const data = await response.json();
    console.log(data);
    setPaymentData(data);
    setLoading(false);
  }

  const updateOrder = async (id, status) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    const data = await response.json();
    console.log(data);
    fetchPaymentHistory();
  }

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const getActive = (status) => {
    if (status === 'placed') return 0;
    if (status === 'shipped') return 1;
    if (status === 'ontheway') return 2;
    if (status === 'delivered') return 3;
  }

  const getLineVariant = (step, status) => {
    if (status === 'placed' && step > 0) return 'dashed';
    if (status === 'shipped' && step > 1) return 'dashed';
    if (status === 'ontheway' && step > 2) return 'dashed';
    return 'solid';
  }

  return (
    <Container size="lg">
      <Title order={1} align="center" my={20}>Order History</Title>

      {loading ? (
        <Loader />
      ) : (
        paymentData.map((order, index) => (
          <Paper mt={30} padding="lg" shadow="md" p={20} withBorder>
            <Grid gutter="md" key={order._id} mb={20}>
              <Grid.Col span={6}>
                <Text size='sm' c={'dimmed'}>Shipping Address</Text>
                <Text>{order.shipping.name}</Text>
                <Text>{order.shipping.address.line1}</Text>
                <Text>{order.shipping.address.postal_code}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size='sm' c={'dimmed'}>Order Details</Text>
                <Text>Order ID: {order._id}</Text>
                <Text>Amount: ₹{order.details.amount / 100}</Text>
                <Text>Payment Status: {order.details.status}</Text>
              </Grid.Col>
            </Grid>

            <Select my={20}
              label="Update Order Status"
              placeholder="Pick value"
              onChange={(value) => updateOrder(order._id, value)}
              data={['placed', 'shipped', 'ontheway', 'delivered']}
            />

            <Timeline active={getActive(order.status)} bulletSize={24} lineWidth={2} bulletSize={30}>
              <Timeline.Item lineVariant={getLineVariant(1, order.status)} bullet={<IconCircleCheckFilled size={16} />} title="Order Placed">
                <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
                <Text size="xs" mt={4}>2 hours ago</Text>
              </Timeline.Item>
              <Timeline.Item lineVariant={getLineVariant(2, order.status)} bullet={<IconTruckLoading size={16} />} title="Shipped">
                <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
                <Text size="xs" mt={4}>2 hours ago</Text>
              </Timeline.Item>

              <Timeline.Item lineVariant={getLineVariant(3, order.status)} bullet={<IconTruck size={16} />} title="On the Way">
                <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
                <Text size="xs" mt={4}>52 minutes ago</Text>
              </Timeline.Item>

              <Timeline.Item title="Pull request" bullet={<IconPackageExport size={16} />} lineVariant="dashed">
                <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
                <Text size="xs" mt={4}>34 minutes ago</Text>
              </Timeline.Item>
            </Timeline>

          </Paper>
        ))
      )}
    </Container>
  );
};

export default ManageOrders;