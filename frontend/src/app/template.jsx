'use client';
import { Drawer, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Navbar } from './navbar';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import Footer from './footer';
import { AppProvider } from '@/context/AppContext';



const Template = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <AppProvider>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>
        {children}
      </AppProvider>
      <Footer />
    </SnackbarProvider>


  )
}

export default Template;