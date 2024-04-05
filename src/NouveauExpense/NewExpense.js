import React from "react";
import './NewExpense.scss';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseHandler = (expense) => {
        const enteredExpense = {
            ...expense,
            id: Math.random().toString()
        }
        console.log(enteredExpense);
        props.onAddExpense(enteredExpense);
    };
    

    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
      </div>
    );
};

export default NewExpense;