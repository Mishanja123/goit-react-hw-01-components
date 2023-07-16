import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/TransactionHistory';



import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';





export const App = () => {
  return (
    <>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
   
        <Statistics 
            title="Upload stats" 
            stats={data} 
            key={data.id}

        />

    <FriendList 
    friends={friends} 
    />


    <div style={{
        marginLeft: "40px",
        marginBottom: "40px",
        border: "solid pink",
        borderRadius: "20px",
        width: "350px",
        height: "280px",
        overflow: "auto"
    }}>
    <TransactionHistory 
    items={transactions} 
    />
    </div>
    </>
  );
};
