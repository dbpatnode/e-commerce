import React from 'react'
import './custom-button.scss'

const CustomButton = ({ children, type, value }) => (
    // <div className="custom-button-container">
    // <input
    //     className="custom-button"
    //     type={type}
    //     value={value}
    // />
    // </div>
    <button
        className="custom-button"
        type={type}
    >
        {children}
    </button>
)

export default CustomButton