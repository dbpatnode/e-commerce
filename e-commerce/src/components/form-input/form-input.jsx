import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, defaultValue, type, name, required }) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleChange}
            name={name}
            type={type}
            defaultValue={defaultValue}
            required={required}
        />
        {
            label ?
                (<label className={`${defaultValue.length ? 'shrink' : ''}  form-input-label`} >
                    {label}
                </label>)
                :
                null
        }
    </div>
)

export default FormInput;
