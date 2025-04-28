import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;



import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if (cost > remaining) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>

                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem', size: 10 }}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;


  {
                        /* Add Budget component here */
                    }
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    {
                        /* Add Remaining component here*/
                    }
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    {
                        /* Add ExpenseTotal component here */
                    }
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    {
                        /* Add ExpenseList component here */
                    }
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row '>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    {
                        /* Add ExpenseItem component here */
                    }
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    {
                        /* Add AllocationForm component here under */
                    }

                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>


