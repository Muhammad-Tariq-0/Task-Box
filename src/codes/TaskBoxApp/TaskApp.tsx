import React, { useState } from 'react';
import './TaskAppCss.css'
const TaskApp = () => {
    const [value, setvalue] = useState('');
    const [task, settask] = useState<string[]>(["School","University","College","Academy"]);
    function handleChange(e: any) {
        e.preventDefault();
        settask((oldItems) => {
            return [...oldItems, value];
        })
    }
    return (
        <div className="main">
            <h3 style={{color:"white"}}>Add Task Here</h3>
            <form>
                <input type="text" onChange={(event) => setvalue(event.target.value)} value={value} /> 
                <button onClick={(e) => handleChange(e)}>Add</button>
            </form>

<br/>
            {task.map((val) => {
                return (<h3 className="tasksclass">{val}</h3>)
            })}
           <br/><br/><br/><br/><br/>
        </div>
    );
};

export default TaskApp;

