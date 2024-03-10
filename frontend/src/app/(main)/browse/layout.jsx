'use client';
import useBrowseContext from '@/context/BrowseContext';
import { AppShell, Burger, Checkbox, Group, RangeSlider, Title, ColorPicker , DEFAULT_THEME } from '@mantine/core'
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
    const [value, onChange] = useState('#fff');

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
                <ColorPicker
                     format="hex"
                     value={value}
                     onChange={onChange}
                     withPicker={false}
                     fullWidth
                     swatches={[
                     ...DEFAULT_THEME.colors.red.slice(0, 7),
                     ...DEFAULT_THEME.colors.green.slice(0, 7),
                     ...DEFAULT_THEME.colors.blue.slice(0, 7),
                     ]}
                />
                <Title order={4} mt={30}>Category</Title>
                <Checkbox.Group
                    defaultValue={['react']}
                    // label="Select your favorite frameworks/libraries"
                    // description="This is anonymous"
                    withAsterisk
                >
                    <Group mt="xs">
                        <Checkbox value="react" label="xs" />
                        <Checkbox value="svelte" label="s" />
                        <Checkbox value="ng" label="l" />
                        <Checkbox value="vue" label="xl" />
                        <Checkbox value="vue" label="xxl" />
                    </Group>
                </Checkbox.Group>
                

            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout