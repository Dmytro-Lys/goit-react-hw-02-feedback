import css from './Statistiks.module.css';
import PropTypes from "prop-types";
import clsx from "clsx";


export const Statistics = ({ title, stats }) => {
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css["stat-list"]}>
    {stats.map( ({id, label, percentage}) =>(
      <StatItem
        key={id}
        label={label}
        percentage={percentage}
      />
    ))}            
  </ul>
</section>)
}

const StatItem = ({ label, percentage }) => {
  return (
     <li className={clsx(css.item, css[getStatClassName(label)])}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
    </li>
  )
}

const getStatClassName = item => item.slice(1,item.length)

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}
