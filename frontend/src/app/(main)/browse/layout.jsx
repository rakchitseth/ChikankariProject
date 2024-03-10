'use client';
import useBrowseContext from '@/context/BrowseContext';
import { AppShell, Burger, RangeSlider, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import appConfig from '@/utils/constants'

const { minPrice, maxPrice } = appConfig;

const priceMarks = [
    { value: 100, label: '₹100' },
    { value: 2000, label: '₹2000' },
    { value: 5000, label: '₹5000' },
    { value: 10000, label: '₹10000' },
];

const Layout = ({ children }) => {

    const { setSelPriceRange } = useBrowseContext();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: false },
            }}
            padding="md"
        >

            <AppShell.Navbar p="md">
                <Title order={1}>Filter Options</Title>

                <Title order={4}>Price</Title>
                <RangeSlider
                    min={minPrice}
                    max={maxPrice}
                    marks={priceMarks} defaultValue={[minPrice, maxPrice]}
                    onChangeEnd={v => setSelPriceRange([...v])}
                    
                />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout