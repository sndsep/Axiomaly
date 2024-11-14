import React from 'react';

const Slider = ({ 
    value, 
    onValueChange, 
    min, 
    max, 
    step 
}: {
    value: number[];
    onValueChange: (value: number[]) => void;
    min: number;
    max: number;
    step: number;
}) => {
    return (
        <input
            type="range"
            value={value[0]}
            onChange={(e) => onValueChange([Number(e.target.value)])}
            min={min}
            max={max}
            step={step}
        />
    );
};

export default Slider;
