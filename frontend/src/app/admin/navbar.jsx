import { Icon2fa, IconBellRinging, IconDatabaseImport, IconSettings } from '@tabler/icons-react';
import classes from './NavbarNested.module.css';
import { IconReceipt2 } from '@tabler/icons-react';
import { IconFingerprint } from '@tabler/icons-react';
import { IconKey } from '@tabler/icons-react';
import { useState } from 'react';

export function NavbarNested() {

    const [active, setActive] = useState('Billing');

    return (
        <nav className={classes.navbar}>
            <div className={classes.header}>
            </div>
            <div className={classes.footer}>
            </div>
        </nav>
    );
}