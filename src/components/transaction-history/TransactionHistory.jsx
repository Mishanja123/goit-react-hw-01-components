export const TransactionHistory = ({items}) => {
    return (
      
        <table className="transaction-history">
          
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {items.map((item, id) => (
      <tbody key={id}>
          <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
  </tbody>
  ))}
  </table>
    );
};
