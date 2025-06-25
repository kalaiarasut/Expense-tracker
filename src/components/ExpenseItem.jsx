import React from "react";

function ExpenseItem({ id, title, amount, deleteExpense ,setItemToEdit}) {
    const typeClass = amount >= 0 ? "income" : "expense";

    return (
        <div className={`expense-item ${typeClass}`}>
            <span className="expense-title">{title}</span>
            <span className="delete-button-overley">
                <button onClick={() => deleteExpense(id)}>Delete</button>
                <button onClick={() => setItemToEdit({ id, title, amount })}>Edit</button>
            </span>
            <span className="expense-amount">{amount}</span>
        </div>
    );
}

export default ExpenseItem;