import React from "react";
import PropTypes from "prop-types";
import styles from "../Transactions/Transactions.module.css";

const Transactions = ({ transactions }) => (
    <>
        <h2>Transactions History</h2>
        <table className={styles.transactions}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((item) => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        })
    ),
};

export default Transactions;
