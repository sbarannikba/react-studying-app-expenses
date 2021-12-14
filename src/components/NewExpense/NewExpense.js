import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import "./NewExpense.css";

function NewExpense(props) {
    const [expandForm, setExpandForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        toggleFormExpandHandler();
    };

    const toggleFormExpandHandler = () => {
        setExpandForm(!expandForm);
    };

    if(expandForm) {
        return (
            <div className="new-expense">
                <ExpenseForm onToggleForm={toggleFormExpandHandler} onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        );
    }

    return (
        <div className="new-expense">
            <button onClick={toggleFormExpandHandler}>Add expence</button>
        </div>
    );
}

export default NewExpense;
