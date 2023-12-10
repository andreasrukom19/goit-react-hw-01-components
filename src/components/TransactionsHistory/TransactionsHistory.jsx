import css from './TransactionsHistory.module.css';

const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css['transaction-history-head']}>
        <tr className={css.row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css['transaction-history-body']}>
        {transactions.map(transaction => {
          return (
            <tr className={css.row} key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export { TransactionsHistory };