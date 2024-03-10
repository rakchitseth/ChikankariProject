'use client';
import { AppShell, Burger, Checkbox, Group, RangeSlider, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import { NavbarNested } from './navbar';


const Layout = ({ children }) => {


    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 400,
                breakpoint: 'sm',
                collapsed: { mobile: false },
            }}
            padding="md"
        >
            <NavbarNested />

            <AppShell.Navbar p="md">
                <Title order={1}>Admin Options</Title>

            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout