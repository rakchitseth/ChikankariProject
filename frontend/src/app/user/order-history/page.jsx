"use client";
import React, { useEffect, useState } from 'react';
import { Container, Title, Text, Paper, Col, Grid, Loader } from '@mantine/core';

const OrderHistory = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPaymentHistory = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getbyuser`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    });
    const data = await response.json();
    console.log(data);
    setPaymentData(data);
    
  }

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  return (
    <Container size="lg">
      <Title order={1} align="center" my={20}>Order History</Title>

      {loading ? (
        <Loader />
      ) : (
        paymentData.map((order, index) => (
          <Paper padding="md" shadow="xs" style={{ marginBottom: '15px' }} key={index}>
            <Grid gutter="md">
              <Col span={12}>
                <Text>Order ID: {order.id}</Text>
                <Text>Date: {new Date(order.date).toLocaleDateString()}</Text>
                <Text>Total: ${order.total}</Text>
                <Text>Status: {order.status}</Text>
              </Col>
            </Grid>
          </Paper>
        ))
      )}
    </Container>
  );
};

export default OrderHistory;