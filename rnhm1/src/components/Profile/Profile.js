import React from "react";
import PropTypes from "prop-types";
import styles from "../Profile/Profile.module.css";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
    <>
        <h2>Profile</h2>
        <div className={styles.profile}>
            <div className={styles.description}>
                <img className={styles.avatar} src={avatar} alt="user avatar" />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    </>
);

Profile.defaultProps = {
    tag: "=) t@g",
    location: "on Earth",
    avatar:
        "http://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg",
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;
