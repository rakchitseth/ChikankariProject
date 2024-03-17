'use client';
import { Icon2fa, IconBellRinging, IconDatabaseImport, IconFingerprint, IconSettings } from '@tabler/icons-react';
import { AppShell, Burger, Checkbox, Group, RangeSlider, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import AdminNavbar from './navbar';
import { IconKey } from '@tabler/icons-react';
import { IconReceipt2 } from '@tabler/icons-react';
import classes from './sidebar.module.css';

const data = [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
];

const Layout = ({ children }) => {

    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <AppShell
            header={{ height: 0 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: false },
            }}
            padding="md"
            layout="alt"
        >

            <AppShell.Header>
                <AdminNavbar />
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Title order={3}>Admin Options</Title>
                {links}
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout