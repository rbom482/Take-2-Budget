import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0); 
    //Update newBudget state when budget value changes
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);
    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (parseInt(newBudgetValue) <= 20000) {
            if (parseInt(newBudgetValue) >= totalExpenses) {
                dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
                setNewBudget(newBudgetValue);
            } else {
                alert("Budget cannot be lower than total expenses!");
            }
        } else {
            alert("Budget cannot exceed £20000!");
        }
    };
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}&#160;&#160;</span>
        <input name = "budget" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;

//In the above code snippet we are using the useState hook to create a state variable called newBudget and initialize it with 
//the current value of budget. We are also defining a function called handleBudgetChange that updates the value of newBudget 
//when the user changes the value of the input field.

//We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls 
//handleBudgetChange when the user changes the value of the input field.

//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.