import React, { useState } from 'react';
import './TaskAppCss.css';
const TaskApp = () => {
    const [value, setvalue] = useState('');
    const [task, settask] = useState(["School", "University", "College", "Academy"]);
    function handleChange(e) {
        e.preventDefault();
        settask((oldItems) => {
            return [...oldItems, value];
        });
    }
    return (React.createElement("div", { className: "main" },
        React.createElement("h3", { style: { color: "white" } }, "Add Task Here"),
        React.createElement("form", null,
            React.createElement("input", { type: "text", onChange: (event) => setvalue(event.target.value), value: value }),
            React.createElement("button", { onClick: (e) => handleChange(e) }, "Add")),
        React.createElement("br", null),
        task.map((val) => {
            return (React.createElement("h3", { className: "tasksclass" }, val));
        }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null)));
};
export default TaskApp;
