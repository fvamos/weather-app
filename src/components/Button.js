import React from 'react'

export const Button = ({ text, handleClick }) => {
    return (
        <button id="zip-submit" type="submit" onClick={handleClick}>{text}</button>
    )
}

export default Button;