import { BsFillCheckCircleFill } from 'react-icons/bs';

import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d37ead5d5ba73585e8c290f5e2a1fc2~c5_300x300.webp?x-expires=1691762400&x-signature=ckUO4VCPLYhoxIPOdZKCz%2B0iG3Q%3D"
                alt="Mai Quynh Anh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <BsFillCheckCircleFill className={cx('check')} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
