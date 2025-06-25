function BalanceContainer( props ) {
    const {expenses} = props;
    const incomearr = expenses.filter((expense) => Number(expense.amount) > 0);
    const expensearr = expenses.filter((expense) => Number(expense.amount) < 0);
    let income = 0;
    let expense = 0;

    incomearr.forEach((item) => {
        income += item.amount;
    });
    expensearr.forEach((item) => {
        expense += item.amount;
    });
    console.log(income, expense);
    let total = income+expense;

  return (
    <>
    <div className="Balance-container">
      <div className="Currency-item">
        <div className="title">Income</div>
        <div className="income-amount">{income}</div>
      </div>
      <div className="Currency-item">
        <div className="title">Expense</div>
        <div className="expense-amount">{expense}</div>
      </div>
      <div className="Currency-item">
        <div className="title">Balance</div>
        <div className="total-amount">{total}</div>
      </div>
    </div>
    </>
  );
}
export default BalanceContainer;