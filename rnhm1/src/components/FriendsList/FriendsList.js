import React from "react";
import PropTypes from "prop-types";
import FriendsItem from "../FriendsList/FriendsItem";
import styles from "../FriendsList/FriendsList.module.css";

const FriendsList = ({ friends }) => (
    <ul className={styles.friendsList}>
        {friends.map((friend) => (
            <li className={styles.friendsItem} key={friend.id}>
                <FriendsItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    alt={friend.alt}
                    name={friend.name}
                />
            </li>
        ))}
    </ul>
);

FriendsList.propTypes = {
    id: PropTypes.number.isRequired,
};

export default FriendsList;
