import PropTypes from 'prop-types';

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
           {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  id: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};


export default TransactionHistory;