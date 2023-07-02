export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
        {stats.map((stat, id) => (
            <li className="item" key={id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
            </li>
        ))}
            </ul>
        </section>
    );
};
