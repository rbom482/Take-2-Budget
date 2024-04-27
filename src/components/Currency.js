import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useContext } from "react";
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState(null);
    const [currencyTitle, setCurrencyTitle] = useState("Choose Currency");

    const handleCurrencyChange = (newCurrencyValue) => {
        let newTitle = "";
        if (newCurrencyValue === "$") {
            dispatch({ type: 'CHG_CURRENCY', payload: newCurrencyValue });
            setCurrency(newCurrencyValue);
            newTitle = "Currency ($ Dollar)";
        } else if (newCurrencyValue === "£") {
            dispatch({ type: 'CHG_CURRENCY', payload: newCurrencyValue });
            setCurrency(newCurrencyValue);
            newTitle = "Currency (£ Pound)";
        } else if (newCurrencyValue === "€") {
            dispatch({ type: 'CHG_CURRENCY', payload: newCurrencyValue });
            setCurrency(newCurrencyValue);
            newTitle = "Currency (€ Euro)";
        } else if (newCurrencyValue === "₹") {
            dispatch({ type: 'CHG_CURRENCY', payload: newCurrencyValue });
            setCurrency(newCurrencyValue);
            newTitle = "Currency (₹ Ruppee)";
        }
        setCurrencyTitle(newTitle);
    };

    return (
        <>
            <div className="btn-group">
                <button className="text-capitalize btn btn-success btn-lg" type="button">
                    {currencyTitle}
                </button>
                <button
                    type="button"
                    className="btn btn-lg btn-success dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu bg-success">
                    <a className="dropdown-item" onClick={() => handleCurrencyChange("$")}>
                        $ Dollar
                    </a>
                    <a className="dropdown-item" onClick={() => handleCurrencyChange("£")}>
                        £ Pound
                    </a>
                    <a className="dropdown-item" onClick={() => handleCurrencyChange("€")}>
                        € Euro
                    </a>
                    <a className="dropdown-item" onClick={() => handleCurrencyChange("₹")}>
                        ₹ Ruppee
                    </a>
                </div>
            </div>
        </>
    );
};
export default Currency;

// const Currency = () => {
//     const {currency, dispatch} = useContext(AppContext);
//     const [newCurrency, setNewCurrency] = useState(currency);

//     useEffect(() => {
//         setNewCurrency(currency);
//         dispatch({ type: 'DONE', payload: newCurrency });
//     }, [currency]);

//     return (
//         <>
//             <div className="btn-group success">
//                 <button
//                     type="button"
//                     className={"dropdown-toggle dropdown-toggle-split alert alert-info"}
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                 >
//                     <span className="visually-hidden">Toggle Dropdown</span>
//                 </button>
//                 <div className="dropdown-menu btn-success">
//                     <a className="dropdown-item btn-success" onClick={() => setNewCurrency("$")}>
//                         Currency ($ Dollar)
//                     </a>
//                     <a className="dropdown-item" onClick={() => setNewCurrency("€")}>
//                         Currency (€ Euro)
//                     </a>
//                     <a className="dropdown-item" onClick={() => setNewCurrency("₹")}>
//                         Currency (₹ Ruppee)
//                     </a>
//                     <a className="dropdown-item" onClick={() => setNewCurrency("£")}>
//                         Currency (£ Pound)
//                     </a>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Currency;

//In the above code snippet we are using the useState hook to create a state variable called newBudget and initialize it with 
//the current value of budget. We are also defining a function called handleBudgetChange that updates the value of newBudget 
//when the user changes the value of the input field.

//We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls 
//handleBudgetChange when the user changes the value of the input field.

//Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.