import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
import Transactions from "./components/Transactions/Transactions";
import user from "./dataJson/user.json";
import statisticalData from "./dataJson/statistical-data.json";
import friends from "./dataJson/friends.json";
import transactions from "./dataJson/transactions.json";
//import "./App.css";

const App = () => {
    return (
        <>
            <h1>React HomeWork-1</h1>

            <h2>Profile</h2>

            <Profile
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />

            <h2>Statistics </h2>

            <Statistics title="Upload states" statistics={statisticalData} />

            <h2>Friends List</h2>

            <FriendsList friends={friends} />

            <h2>Transactions History</h2>

            <Transactions transactions={transactions} />
        </>
    );
};
export default App;
