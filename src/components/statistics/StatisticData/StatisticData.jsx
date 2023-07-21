import PropTypes from "prop-types";
import css from './StatisticData.module.css'

export const StatisticData = ({ label, percentage }) => {
  return (
    <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
    </li>
  )
}

StatisticData.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}