import PropTypes from "prop-types";
import { TransactionHistoryData } from './TransactionHistoryData/TransactionHistoryData'
import css from './Transactions.module.css'

export const TransactionHistory = ({items}) => {
    return (
      
      <div className={css.table}>
        <table className={css.transaction}>
          <thead className={css.table}>
            <tr>
              <th className={css.type}>Type</th>
              <th className= {css.amount}>Amount</th>
              <th className= {css.currency}>Currency</th>
            </tr>
          </thead>
          <tbody>
           {items.map(item => (<TransactionHistoryData
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              key={item.id}
              />))}
          </tbody>
        </table>
      </div>
    );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
}
