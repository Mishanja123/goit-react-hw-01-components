import PropTypes from "prop-types";

import css from './Friends.module.css'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
{friends.map((friend, id) => (        
        <li className={css.item} key={id}>
            <span className={css.status} style={{backgroundColor: friend.isOnline ? "green" : "red"}}></span>
            <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
        </li>
        ))}
        </ul>
  );
};
FriendList.propTypes = {
    friends: PropTypes.array,
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}