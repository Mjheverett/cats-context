import React, { useContext, useState } from 'react';
import StateContext from '../context';

const Demo = () => {
    const [value, dispatch] = useContext(StateContext);
    const [input, setInput] = useState('');
    const { name, activity } = value;
    
    const _handleChange = (name) => {
        setInput(name);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "CHANGE_NAME",
            name: input,
        });
        setInput('');
    };

    const _handleActivity = (e, activity) => {
        e.preventDefault();
        dispatch({
            type: "SET_ACTIVITY",
            activity,
        });
    }

    return (
        <>
            <form onSubmit={e => _handleSubmit(e)}>
                <label>Add a new cat:
                    <input 
                        type="text" 
                        name="newCat" 
                        placeholder="New Cat" 
                        value={input}
                        onChange={(event) => _handleChange(event.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>{name} is {activity}</p>
            <button type="button" onClick={(e) => _handleActivity(e, "eating")}>Eating</button>
            <button type="button" onClick={(e) => _handleActivity(e, "napping")}>Napping</button>
            <button type="button" onClick={(e) => _handleActivity(e, "playing")}>Playing</button>
        </>
    )
}

export default Demo;