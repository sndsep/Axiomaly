import React from 'react';

const Slider = ({ value, onValueChange, min, max, step }) => {
    return (
        <input
            type="range"
            value={value}
            onChange={(e) => onValueChange(Number(e.target.value))}
            min={min}
            max={max}
            step={step}
        />
    );
};

export default Slider;
