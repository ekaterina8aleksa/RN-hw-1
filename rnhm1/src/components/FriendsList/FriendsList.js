import React from "react";
import PropTypes from "prop-types";
import FriendsItem from "../FriendsList/FriendsItem";
import styles from "../FriendsList/FriendsList.module.css";

const FriendsList = ({ friends }) => (
    <>
        <h2>Friends List</h2>
        <ul className={styles.friendsList}>
            {friends.map(({ id, isOnline, avatar, alt, name }) => (
                <li className={styles.friendsItem} key={id}>
                    <FriendsItem
                        isOnline={isOnline}
                        avatar={avatar}
                        alt={alt}
                        name={name}
                    />
                </li>
            ))}
        </ul>
    </>
);

FriendsList.propTypes = {
    id: PropTypes.number.isRequired,
};

export default FriendsList;
