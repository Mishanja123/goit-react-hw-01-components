import PropTypes from "prop-types";

import css from './Transactions.module.css'

export const TransactionHistory = ({items}) => {
    return (
      
        <table className={css.transactionHistory}>
          
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {items.map((item, id) => (
      <tbody key={id}>
          <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
  </tbody>
  ))}
  </table>
    );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
  amount: PropTypes.string,
  currency: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
}
