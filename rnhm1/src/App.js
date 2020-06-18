import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
import Transactions from "./components/Transactions/Transactions";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
    return (
        <>
            <h1>React HomeWork-1</h1>
            <Profile
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
            <Statistics title="Upload states" statistics={statisticalData} />
            <FriendsList friends={friends} />
            <Transactions transactions={transactions} />
        </>
    );
};
export default App;
