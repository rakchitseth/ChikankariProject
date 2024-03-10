import React from 'react';
import { CartProvider } from '@/context/CartContext';
import { BrowseProvider } from '@/context/BrowseContext';

const Layout = ({ children }) => {
    return (
        <CartProvider>
            <BrowseProvider>
                {children}
            </BrowseProvider>
        </CartProvider>
    )
}

export default Layout