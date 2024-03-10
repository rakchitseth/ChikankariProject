import { Icon2fa, IconBellRinging, IconDatabaseImport, IconSettings } from '@tabler/icons-react';
import classes from './NavbarNested.module.css';
import { IconReceipt2 } from '@tabler/icons-react';
import { IconFingerprint } from '@tabler/icons-react';
import { IconKey } from '@tabler/icons-react';
import { useState } from 'react';

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