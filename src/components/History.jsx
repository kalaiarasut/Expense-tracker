import ExpenseItem from "./ExpenseItem";

function History(props) {
    const { expense, deleteExpense, setItemToEdit} = props;
    return (
        <div className="history">
            <h3>History</h3>
            {expense.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    deleteExpense={deleteExpense}
                    setItemToEdit={setItemToEdit}
                />
            ))}
        </div>
    );
}
export default History;