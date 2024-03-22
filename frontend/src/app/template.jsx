'use client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Navbar } from './navbar';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import Footer from './footer';
import { AppProvider } from '@/context/AppContext';



const Template = ({ children }) => {
  return (

    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <AppProvider>
        {/* <Navbar /> */}
        {children}
      </AppProvider>
      <Footer />
    </SnackbarProvider>


  )
}

export default Template;