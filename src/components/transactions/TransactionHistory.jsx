import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";
import clsx from "clsx";

export const TransactionHistory = ({items}) => {
    return (<table className={css["transaction-history"]}>
        <thead className={css.thead}>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <tbody>
          {items.map(({ id, type, amount, currency }, index) => (
              <tr key={id} className={clsx( {[css["tr-even"]]: index % 2 !== 0})}>
                <td className={css['td-type']}>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
           </tr>
          ))}
  </tbody>
</table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}