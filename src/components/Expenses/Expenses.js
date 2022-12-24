
import './Expenses.css';
import ExpensesFilter from "../Filter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const yearChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeYear={yearChangeHandler}
            />
            <ExpenseList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses;