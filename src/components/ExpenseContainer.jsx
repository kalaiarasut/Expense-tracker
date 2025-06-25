import ExpenseForm from "./ExpenseForm";
import History from "./History";
import { useState } from "react";
import BalanceContainer from "./BalanceContainer";
import { v4 as uuidv4 } from 'uuid';

const expense = [
    { id: 1, title: "Intern", amount: 20000 },
    { id: 2, title: "Superpacc fee", amount: -30 },
    { id: 3, title: "Scholarship", amount: 40 }
];
const ExpenseContainer = () => {
    const [expenses, setExpenses] = useState(expense);
    const [itemToEdit, setItemToEdit] = useState(null); 

    const addExpense = (title, amount) => {
        setExpenses([...expenses, { id: uuidv4(), title, amount }]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
    };

    const editExpense = (id, updatedTitle, updatedAmount) => {
        setExpenses(expenses.map(exp =>
            exp.id === id ? { ...exp, title: updatedTitle, amount: updatedAmount } : exp
        ));
        setItemToEdit(null);
    };

    return (
        <div className="expense-container">
            <h2>Expense Tracker</h2>
            <BalanceContainer expenses={expenses} />
            <History
                expense={expenses}
                deleteExpense={deleteExpense}
                setItemToEdit={setItemToEdit}
            />
            <ExpenseForm
                addExpense={addExpense}
                itemToEdit={itemToEdit}
                editExpense={editExpense}
            />
        </div>
    );
};
export default ExpenseContainer;