import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a35077aec6fce9c78aace7783c284055~c5_100x100.jpeg?x-expires=1692957600&x-signature=uOhExC2X9LUVeJx%2BdNQucnlff78%3D"
                    alt=""
                />
                {/* <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button> */}
                <Button className={cx('follow-btn')} outline small>
                    Following
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>spinach.omg</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>rau chân vịt🥬</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>8.2M</strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
