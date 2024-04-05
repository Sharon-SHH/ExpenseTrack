import React, {useState} from "react";
import './ExpenseForm.scss';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(new Date());
    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };
    const amountHandler = event => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };
    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    };
    const submitForm = (event) => {
        event.preventDefault();
        const expenseObj = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate)
        };
        console.log(expenseObj);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpense(expenseObj);
    }
    
    return (
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title: </label>
            <input type="text" value={enteredTitle} onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount: </label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step={0.01}
              onChange={amountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date: </label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2024-05-31"
              onChange={dateHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </form>
    );
}

export default ExpenseForm;