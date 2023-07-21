import PropTypes from "prop-types";
import { FriendItem } from './FriendsItem/FriendsItem';
import css from './Friends.module.css'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <FriendItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
                />)
             )}
        </ul>
  );
};
FriendList.propTypes = {
    friends: PropTypes.array,
}