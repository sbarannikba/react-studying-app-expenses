import React, {useState} from 'react';
import ExpensesList from './ExpensesList'; 
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filtredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            <ExpensesChart expenses={filtredExpenses} />
            <ExpensesList items={filtredExpenses} />
        </Card>
    );
}

export default Expenses;
