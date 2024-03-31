import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

+/**
+ * Budget component displays the current budget and allows the user to change it.
+ * 
+ * It uses the budget value from the AppContext and updates the newBudget state with
+ * the user's input. The handleBudgetChange function is called whenever the user
+ * changes the input value.
+ * 
+ * @returns {JSX.Element} The Budget component.
+ */
const Budget = () => {
+    // Get the budget value from the AppContext
    const { budget } = useContext(AppContext);
+    
+    // State to keep track of the new budget value
    const [newBudget, setNewBudget] = useState(budget);
+    
+    /**
+     * Function to handle the change of the budget input value.
+     * 
+     * @param {Object} event - The event object from the input change.
+     */
    const handleBudgetChange = (event) => {
+        // Update the newBudget state with the new value
        setNewBudget(event.target.value);
    }
+    
+    // Return the JSX for the Budget component
    return (
+        <div className='alert alert-secondary'>
           {/* Display the current budget */}
+            <span>Budget: £{budget}</span>
+            {/* Input field for the user to change the budget */}
+            <input 
+                type="number" 
+                step="10" 
+                value={newBudget} 
+                onChange={handleBudgetChange}
+            ></input>
+        </div>
-<div className='alert alert-secondary'>
-<span>Budget: £{budget}</span>
-<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
-</div>
    );
};

export default Budget;
