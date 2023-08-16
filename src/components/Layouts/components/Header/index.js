import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FaEllipsisVertical, FaEarthAsia } from 'react-icons/fa6';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Layouts/components/Search';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import {
    CoinIcon,
    DarkmodeIcon,
    FavoriteIcon,
    HelpIcon,
    InboxIcon,
    KeyboardIcon,
    LogoutIcon,
    MessageIcon,
    SettingIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
// import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FaEarthAsia />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkmodeIcon />,
        title: 'Dark mode',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change lanuage
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FavoriteIcon />,
            title: 'Favorites',
            to: '/feedback',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Begin Search */}
                <Search />
                {/* End Search */}

                {/* Begin actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('upload-btn')} leftIcon={<UploadIcon />} outline>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'notify-inbox')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d37ead5d5ba73585e8c290f5e2a1fc2~c5_300x300.webp?x-expires=1691762400&x-signature=ckUO4VCPLYhoxIPOdZKCz%2B0iG3Q%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="data:image/jpeg;base64,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"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FaEllipsisVertical />
                            </button>
                        )}
                    </Menu>
                </div>
                {/* End actions */}
            </div>
        </header>
    );
}

export default Header;
