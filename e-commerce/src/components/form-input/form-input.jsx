import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, value, type, name }) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleChange}
            name={name}
            type={type}
            value={value}
        />
        {
            label ?
                (<label className={`${value.length ? 'shrink' : ''}  form-input-label`} >
                    {label}
                </label>)
                :
                null
        }
    </div>
)

export default FormInput;
