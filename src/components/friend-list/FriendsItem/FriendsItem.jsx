import PropTypes from "prop-types";
import css from './FriendsItem.module.css'

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.item}>
        <img src={avatar} alt="avatar" className={css.avatar}style={{borderColor: isOnline ? "rgb(36, 215, 127)" : "rgb(243, 112, 169)"}} />
        <div className={css.wrapp}>
            <p className={css.name}>{name}</p>
            <p className={css.status} style={{backgroundColor: isOnline ? "green" : "red"}}>{isOnline ? "Online" : "Offline"}</p>
        </div>
      </li>
    );
  };

  FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };