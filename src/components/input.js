import React from 'react';

//this part is technically like "props"
const Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
            <label className="input__number">{index + 1}</label>
            <input name={name} value={state} onChange={onChange}/>
            <label className="input__title">{title}</label>
        </div>
    )
}

export default Input;