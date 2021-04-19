import React, { useState, useEffect } from 'react';

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(50);

    const handleChange = (e) => {
        handleFilters(e.target.value);
        setValue(e.target.value);
    }

    return prices.map((p, i) => (
        <div key={i} className="list-unstyled">
            <input onChange={handleChange} name={p} value={`${p._id}`} type="radio" className="ml-2 mr-4" />
            <label className="form-check-label">{p.name}</label>
        </div>
    ))
}

export default RadioBox;