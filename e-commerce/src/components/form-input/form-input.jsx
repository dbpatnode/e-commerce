import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, value, type, name, required }) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleChange}
            name={name}
            type={type}
            value={value}
            required={required}
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
