import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";

const Statistics = ({ title, statistics }) => (
    <section className={styles.statisticsData}>
        {title.length > 0 && <h3 className={styles.title}>{title}</h3>}

        <ul className={styles.dataList}>
            {statistics.map((stat) => (
                <li
                    key={stat.id}
                    className={styles.dataItem}
                    style={{ backgroundColor: setRGB() }}
                >
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>
                        {stat.percentage}%
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired,
        })
    ),
};

export default Statistics;

const setRGB = () => {
    const red = Math.round(Math.random(0, 1) * 255);
    const green = Math.round(Math.random(0, 1) * 255);
    const blue = Math.round(Math.random(0, 1) * 255);

    return `rgb(${red},${green},${blue})`;
};
