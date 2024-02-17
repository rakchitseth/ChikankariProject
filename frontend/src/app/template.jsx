'use client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Navbar } from './navbar';
import React from 'react';
import { SnackbarProvider } from 'notistack';


const theme = createTheme({
  /** Put your mantine theme override here */
});
const Template = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Navbar />
        {children}
      </SnackbarProvider>
    </MantineProvider>

  )
}

export default Template;