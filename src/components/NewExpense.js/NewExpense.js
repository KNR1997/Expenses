import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
             <ExpenseForm onSave={saveExpenseDataHandler}/>
        </div>
    )

}

export default NewExpense;