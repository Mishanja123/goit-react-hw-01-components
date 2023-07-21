import PropTypes from "prop-types";
import css from './TransactionHistoryData.module.css'

export const TransactionHistoryData = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>
  )
}

TransactionHistoryData.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}