import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch} = useContext(AppContext);

    const changeCurrency = (val)=>{
        const newCurrency = val.target.value;
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newCurrency,
            });
    };
    

  return (
        <div className='alert alert-secondary'> {
        <select className="form-control" onChange={changeCurrency}> 
        <option value="">Currency (£ Pound)</option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;