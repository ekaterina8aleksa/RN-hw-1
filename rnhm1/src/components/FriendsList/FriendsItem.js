import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendsList/FriendsItem.module.css";

const statusCheck = (icon) => {
    const status = [styles.active];

    if (icon === false) {
        status.push(styles.passive);
    }
    return status.join(" ");
};

const FriendsItem = ({ isOnline, avatar, name, alt }) => (
    <>
        <span className={statusCheck(isOnline)}>{isOnline}</span>
        <img className={styles.avatar} src={avatar} alt={alt} width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

FriendsItem.defaultProps = {
    alt: "User Photo",
};
FriendsItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default FriendsItem;
