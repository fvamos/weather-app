import React from 'react'

export const Input = ({ value, onChange }) => {
    return (
        <>  
            <label htmlFor="zip-code">Zip Code:</label>
            <input id="zip-code"
                   style={{"marginLeft": "20px", "marginRight": "5px"}}
                   type="text"
                   value={value}
                   onChange={onChange}
                   placeholder="Enter your zip code..." />
        </>
    )
}

export default Input;