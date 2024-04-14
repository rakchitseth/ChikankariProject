'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    const [cartOpened, toggleCart] = useDisclosure(false);

    useEffect(() => {
        const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setCartTotalAmount(totalAmount);
    }, [cartItems]);

    useEffect(() => {
        const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setCartTotalAmount(totalAmount);
    }, []);

    useEffect(() => {
        const storedCartItems = sessionStorage.getItem('cartItems');
        // console.log(storedCartItems);
        if (storedCartItems) {
            console.log('cart item exists');
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        console.log(cartItems);
        // if (cartItems.length)
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem._id === item._id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            setCartItems(updatedCartItems);
        } else {
            const newItem = { ...item, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
    }

    const removeItem = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
        if (existingItem.quantity === 1) {
            const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
            setCartItems(updatedCartItems);
            sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem._id === item._id) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
            setCartItems(updatedCartItems);
            sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    }

    const clearItem = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
        setCartItems(updatedCartItems);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const checkItemExists = (id) => {
        return cartItems.some((item) => item._id === id);
    }

    const getCartTotalAmount = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            cartTotalAmount,
            addItem,
            removeItem,
            clearItem,
            clearCart,
            checkItemExists,
            cartOpened,
            toggleCart,
            getCartTotalAmount
        }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => useContext(CartContext);

export default useCartContext;