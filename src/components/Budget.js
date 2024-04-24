import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0)

    if (newBudget > 20000) {
        alert("The budget cannot exceed funds.");
        return;
    }

    if (newBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending.");
        return;
    }
   
    


    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} 
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</span>
</div>
    );
};
export default Budget;