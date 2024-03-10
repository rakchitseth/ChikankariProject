'use client';
import useBrowseContext from '@/context/BrowseContext';
import { AppShell, Burger, Checkbox, Group, RangeSlider, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import appConfig from '@/utils/constants'
import { Navbar } from '@/app/navbar';

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
                width: 400,
                breakpoint: 'sm',
                collapsed: { mobile: false },
            }}
            padding="md"
        >
            <Navbar />

            <AppShell.Navbar p="md">
                <Title order={1}>Filter Options</Title>

                <Title order={4}>Price</Title>
                <RangeSlider
                    min={minPrice}
                    max={maxPrice}
                    marks={priceMarks} defaultValue={[minPrice, maxPrice]}
                    onChangeEnd={v => setSelPriceRange([...v])}

                />

                <Title order={4} mt={20}>Category</Title>
                <Checkbox.Group
                    defaultValue={['react']}
                    label="Select your favorite frameworks/libraries"
                    description="This is anonymous"
                    withAsterisk
                >
                    <Group mt="xs">
                        <Checkbox value="react" label="Khadi Cotton" />
                        <Checkbox value="svelte" label="Shiffon" />
                        <Checkbox value="ng" label="Cotton" />
                        <Checkbox value="vue" label="Vescose" />
                        <Checkbox value="vue" label="Premium" />
                    </Group>
                </Checkbox.Group>

            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout