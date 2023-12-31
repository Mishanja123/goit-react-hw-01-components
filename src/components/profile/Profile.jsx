import PropTypes from "prop-types";

import css from './Profile.module.css'

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div className={css.profile}>
        <div className={css.description}>
            <img
            src={avatar}
            alt={tag}
            width={100}
            className={css.avatar}
            />
                <p className={css.tag}>@{tag}</p>
                <p className={css.name}>{username}</p>
                <p className={css.location}>{location}</p>
        </div>

        <div className={css.stats}>
            <ul>
                <li className={css.box}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.box}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.box}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    </div>
  );
};
Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.number,
}