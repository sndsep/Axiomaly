import * as React from 'react';

export const RadioGroup = ({ children }) => {
    return <div>{children}</div>;
};

export const RadioGroupItem = ({ value }) => {
    return <input type="radio" value={value} />;
};
