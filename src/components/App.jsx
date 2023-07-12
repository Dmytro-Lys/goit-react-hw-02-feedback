import { Profile } from "./profile/Profile";
import user from '../data/user.json';
import { Statistics } from "./statistics/Statistiks";
import data from '../data/data.json';
import { FriendList } from "./friends/FriendList";
import friends from "../data/friends.json"
import { TransactionHistory } from "./transactions/TransactionHistory";
import transactions from "../data/transactions.json"


export const App = () => {
  return (
    <>
    <Profile
         user={user}  
    />
    <Statistics 
      title="Upload stats"
      stats={data}
      />
      <FriendList
        friends={friends}
      />  
      <TransactionHistory
        items={transactions}
      />
    </>  
  );
};
