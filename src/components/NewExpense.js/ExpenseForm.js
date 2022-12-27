import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    const [isShown, setIsShown] = useState(false);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const formsubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSave(expenseData);

        //set details to previous state
        setTitle('');
        setAmount('');
        setDate('');

        setIsShown(current => !current);
    };

    const handleAddNewExpense = event => {
        setIsShown(current => !current);
    }

    return (

        <div>
            {!isShown && (
                <div className='new-expense__actions'>
                    <button onClick={handleAddNewExpense}>Add New Expense</button>
                </div>
            )}

            {isShown && (
                <form onSubmit={formsubmit}>
                     <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>title</label>
                            <input type='text' 
                                value={enteredTitle} 
                                onChange={titleChangeHandler}>
                            </input>
                        </div>
                            <div className='new-expense__control'>
                                <label>Amount</label>
                                <input type='number' value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"></input>
                            </div>
                            <div className='new-expense__control'>
                                <label>Date</label>
                                <input type='date'  value={enteredDate} onChange={dateChangeHandler}  min="2022-01-01" max="2022-12-31"></input>
                            </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={handleAddNewExpense}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </form>

            )}
        </div>
    )

}

export default ExpenseForm;