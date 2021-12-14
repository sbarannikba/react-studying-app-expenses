import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
    
    if(props.items.length > 0) {
        return (<ul className="expenses-list">
            {props.items.map( (expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>)
            })}
        </ul>)
    } else {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    
}

export default ExpensesList;
