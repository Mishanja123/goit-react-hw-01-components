import PropTypes from "prop-types";

import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            <ul className={css.statList}>
        {stats.map((stat, id) => (
            <li className={css.item} key={id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
            </li>
        ))}
            </ul>
        </section>
    );
};
Statistics.propTypes = {
    percentage: PropTypes.number,
    label: PropTypes.string,
    id: PropTypes.string,
}
