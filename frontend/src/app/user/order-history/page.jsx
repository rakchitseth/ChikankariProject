'use client';
import { Container } from '@mantine/core';
import React, { useEffect, useState } from 'react'

const OrderHistory = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [paymentData, setPaymentData] = useState([]);

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
  }, [])


  const displayPaymentHistory = () => {
    return paymentData.map((payment, index) => {
      return (
        <div key={index}>
          <p>{payment.details.amount}</p>
          <p>{new Date(payment.createdAt).toLocaleDateString()} {new Date(payment.createdAt).toLocaleTimeString()}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <Container>
        <h1>Payment History</h1>
        {displayPaymentHistory()}
      </Container>
    </div>
  )
}

export default OrderHistory;