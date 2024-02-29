'use client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Navbar } from './navbar';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import Footer from './footer';


const theme = createTheme({
  /** Put your mantine theme override here */
});
const Template = ({ children }) => {
  return (
    <MantineProvider
    defaultColorScheme="light"
      theme={theme}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Navbar />
        {children}
        <Footer />
      </SnackbarProvider>
    </MantineProvider>

  )
}

export default Template;