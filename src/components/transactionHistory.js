import PropTypes from 'prop-types';
import TransactionHistoryItem from './transactionHistoryItem';

const TransactionHistory = ({
    items
    // id,
    // type,
    // amount,
    // currency
}) => {

    return (
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            // console.log(item.amount);
           return (
              <tr key={item.id}>
                <TransactionHistoryItem
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              </tr>
            )
          })} 
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};


export default TransactionHistory;