'use client';
import useBrowseContext from '@/context/BrowseContext';
import { AppShell, Burger, Checkbox, Group, RangeSlider, Title, ColorPicker, DEFAULT_THEME, ActionIcon, Grid, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import appConfig from '@/utils/constants'
import { Navbar } from '@/app/navbar';
import { IconCheck } from '@tabler/icons-react';
import checkboxClasses from './checkbox.module.css';

const { minPrice, maxPrice } = appConfig;

const priceMarks = [
    { value: 100, label: '₹100' },
    { value: 2000, label: '₹2000' },
    { value: 5000, label: '₹5000' },
    { value: 10000, label: '₹10000' },
];

const sizeOptions = [
    'SX', 'S', 'M', 'L', 'XL', 'XXL'
]

const availableColors = [
    {
        name: 'Red',
        color: '#FF0000'
    },
    {

        name: 'Green',
        color: '#008000'
    },
    {
        name: 'Blue',
        color: '#0000FF'
    },
    {
        name: 'Yellow',
        color: '#FFFF00'
    },
    {
        name: 'Pink',
        color: '#FFC0CB'
    },
    {

        name: 'LightGreen',
        color: '#90EE90'
    },
    {
        name: 'LightBlue',
        color: '#ADD8E6'
    },
    {
        name: 'LightYellow',
        color: '#FFFFE0'
    },
]

const Layout = ({ children }) => {

    const {
        setSelPriceRange,
        filterBySize,
        filterByColor,
    } = useBrowseContext();
    const [value, onChange] = useState('#fff');

    const [selColor, setSelColor] = useState(null);
    const [selSizes, setSelSizes] = useState([]);

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

                <Title order={4} mt={30}>Category</Title>
                <Checkbox.Group
                    defaultValue={['react']}
                    // label="Select your favorite frameworks/libraries"
                    // description="This is anonymous"
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
                <Title order={4} mt={20}>Select Color</Title>
                <Grid mt={10}>
                    {
                        availableColors.map(colorOpt => (
                            <Grid.Col span={{ md: 2 }}>
                                <Tooltip label={colorOpt.name} color={colorOpt.color}>

                                    <ActionIcon variant="filled" color={colorOpt.color} aria-label="Settings" onClick={() => {
                                        setSelColor(colorOpt.name);
                                        filterByColor(colorOpt.name);
                                    }}>
                                        {
                                            selColor === colorOpt.name && <IconCheck style={{ width: '70%', height: '70%' }} stroke={1.5} />
                                        }
                                    </ActionIcon>
                                </Tooltip>
                            </Grid.Col>
                        ))
                    }
                </Grid>
                <Title order={4} mt={30}>Size</Title>
                <Checkbox.Group
                    defaultValue={['react']}
                    // label="Select your favorite frameworks/libraries"
                    // description="This is anonymous"
                    withAsterisk
                >
                    <Group mt="xs">
                        {
                            sizeOptions.map(size => (
                                <Checkbox value={size} label={size} checked={selSizes.includes(size)} onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelSizes([...selSizes, size]);
                                    } else {
                                        setSelSizes(selSizes.filter(s => s !== size));
                                    }
                                    // filterBySize(selSizes);
                                }} />
                            ))
                        }
                    </Group>
                </Checkbox.Group>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout