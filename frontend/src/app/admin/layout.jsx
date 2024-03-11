'use client';
import { Icon2fa, IconBellRinging, IconDatabaseImport, IconSettings } from '@tabler/icons-react';
import { AppShell, Burger, Checkbox, Group, RangeSlider, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import { NavbarNested } from './navbar';
import { link } from 'fs/promises';
import { IconKey} from '@tabler/icons-react';
import { IconReceipt2, IconBellRinging } from '@tabler/icons-react';



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
                const data = [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
];


export function NavbarNested() {

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
        <nav className={classes.navbar}>
            <div className={classes.header}>
                {links}

            </div>
            <div className={classes.footer}>
            </div>
        </nav>
    );
}


            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}

export default Layout