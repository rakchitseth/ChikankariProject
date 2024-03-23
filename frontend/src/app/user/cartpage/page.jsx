'use client';
import React, { useContext } from 'react';
import {
  Container,
  Group,
  Text,
  Title,
  Divider,
  Button,
  Card,
  TextInput,
  Spacer,
} from '@mantine/core';
import useCartContext from '@/context/CartContext';

const CartPage = () => {
  const { cartItems, cartTotalAmount, addItem, removeItem, clearItem, clearCart } = useCartContext();

  console.log(cartItems);
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleInputChange = (itemId, newQuantity) => {
    addItem(itemId, newQuantity);
  };

  return (
    <Container size="md">
      <Title>Shopping Cart</Title>
      {cartItems.length === 0 ? (
        <Text>Your cart is currently empty.</Text>
      ) : (
        <>
          <Group direction="column">
            {cartItems.map((item) => (
              <Card key={item._id} shadow="sm" radius="md" withBorder>
                <Group direction="row" spacing="md">
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image[0]}`} alt={item.name} width={80} height={80} />
                  <Group direction="column">
                    <Text weight="bold">{item.name}</Text>
                    <Text size="sm">Price: ${item.price.toFixed(2)}</Text>
                    <TextInput
                      label="Quantity"
                      placeholder="1"
                      value={item.quantity.toString()}
                      onChange={(e) => handleInputChange(item._id, parseInt(e.target.value))}
                    />
                    <Button size="xs" variant="outline" onClick={() => handleRemoveItem(item)}>
                      Remove
                    </Button>
                  </Group>
                </Group>
              </Card>
            ))}
          </Group>
          <Divider my="md" />
          <Group direction="row" justify="space-between">
            <Text>Total: ${cartTotalAmount.toFixed(2)}</Text>
            <Group>
              <Button onClick={clearCart} variant="outline">Clear Cart</Button>
              <Button variant="filled">Checkout</Button>
            </Group>
          </Group>
        </>
      )}
    </Container>
  );
};

export default CartPage;
