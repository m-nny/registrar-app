import { Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import block from '../../libs/bem';
import './Header.scss';

const b = block('Header');

const Header: React.FC = () => {
    const router = useRouter();

    return (
        <div className={b()}>
            <div className={b('logo')}>
                <Link href={'/'}>
                    <Title level={4}>{'{@Registrar@}'}</Title>
                </Link>
            </div>
            <Menu
                style={{ borderBottom: 'none', marginBottom: '-7px' }}
                mode="horizontal"
                selectedKeys={[router.pathname]}
            >
                <Menu.Item key="/">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/auth">
                    <Link href="/auth">
                        <a>Auth</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Header;
