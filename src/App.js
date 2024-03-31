import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
const App = () => {
    return (
        <AppProvider> {/* Add Budget component here under */}
            <div className='container'>
                <h1 className='mt-3'>Company's udget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div> {/* Add Remaining component here under */}
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>  {/* Add ExpenseTotal component here under */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div> {/* Add ExpenseList component here under */}
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>  {/* Add ExpenseItem component here under */}
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>  {/* Add AllocationForm component here under */}
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;