import React from 'react'

export const Button = ({ text, handleClick }) => {
    return (
        <button type="submit" onClick={handleClick}>{text}</button>
    )
}

export default Button;