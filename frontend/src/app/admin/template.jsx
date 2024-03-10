'use client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { NavbarNested} from './navbar';
import React from 'react';
import { SnackbarProvider } from 'notistack';



const theme = createTheme({
  /** Put your mantine theme override here */
});
const Template = ({ children }) => {
  return (
    <MantineProvider
    defaultColorScheme="light"
      theme={theme}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <NavbarNested />
        {children}
        {/* <Footer /> */}
      </SnackbarProvider>
    </MantineProvider>

  )
}

export default Template;