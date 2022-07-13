import TransactionCard from "./TransactionsCard";

const Transaction = () => {
  return (
    <div className="transaction-wrapper card">
      <div className="transaction-header card-header">
        <span>Transaction</span>
        <span className="transaction-link">View All</span>
      </div>
      <div className="transaction-body card-body">
        <TransactionCard
          title="Receive"
          price="150"
          user="Emily Tran"
          time="06:24PM"
        />
        <TransactionCard
          title="Receive"
          price="50"
          user="Jade Tran"
          time="11:24PM"
        />
        <TransactionCard
          title="Receive"
          price="50"
          user="Jade Tran"
          time="11:24PM"
        />
      </div>
    </div>
  );
};

export default Transaction;
