import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    return (
        <div>
            <label htmlFor="currency">Currency:</label>
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="USD">$ Dollar</option>
                <option value="GBP">£ Pound</option>
                <option value="EUR">€ Euro</option>
                <option value="INR">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;