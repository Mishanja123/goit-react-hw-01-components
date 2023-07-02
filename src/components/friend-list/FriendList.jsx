export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
{friends.map((friend, id) => (        
        <li className="item" key={id}>
            <span className="status" style={{backgroundColor: friend.isOnline ? "green" : "red"}}></span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
        </li>))}
        </ul>
  );
};
