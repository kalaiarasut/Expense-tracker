import React, { useState, useEffect } from 'react';

function ExpenseForm(props){
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    // Populate form fields when editing
    useEffect(() => {
        if (props.itemToEdit) {
            setTitle(props.itemToEdit.title);
            setAmount(props.itemToEdit.amount.toString());
        } else {
            setTitle("");
            setAmount("");
        }
    }, [props.itemToEdit]);

    function handlechangetitle(event){
        setTitle(event.target.value);
    }
    function handlechangeamount(event){
        setAmount(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        if (!title.trim()) {
            setError("Title is required.");
            return;
        }
        if (!amount.trim()) {
            setError("Amount is required.");
            return;
        }
       
        if (isNaN(amount) || amount.trim() === "" || !/^[-]?\d+(\.\d+)?$/.test(amount)) {
            setError("Amount must be a valid number.");
            return;
        }
        setError("");

        if (props.itemToEdit) {
            props.editExpense(props.itemToEdit.id, title, Number(amount));
        } else {
            props.addExpense(title, Number(amount));
        }
        setTitle("");
        setAmount("");
    }
    return(
        <>
        <div className="Expense-form">
            <h3>{props.itemToEdit ? "Edit Expense" : "Add Expenses"}</h3>
            {error && <div style={{color: "red", marginBottom: "10px"}}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={handlechangetitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" value={amount} onChange={handlechangeamount}/>
                </div>
                <button type="submit">{props.itemToEdit ? "Update" : "Submit"}</button>
            </form>
        </div>
        </>
    )
}
export default ExpenseForm;