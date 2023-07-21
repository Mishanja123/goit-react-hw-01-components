import PropTypes from "prop-types";
import { StatisticData } from './StatisticData/StatisticData'
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            <ul className={css.statList}>
            {stats.map(stat=>(<StatisticData
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />))}
            </ul>
        </section>
    );
};
Statistics.propTypes = {
    percentage: PropTypes.number,
    label: PropTypes.string,
    id: PropTypes.string,
}
