'use client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Navbar } from './navbar';
import React from 'react';


const theme = createTheme({
  /** Put your mantine theme override here */
});
const Template = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}>
      <Navbar />
      {children}
    </MantineProvider>

  )
}

export default Template;