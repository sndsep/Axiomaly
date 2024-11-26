import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'UI/ToggleSwitch',
  component: ToggleSwitch,
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  
  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return <ToggleSwitch {...args} checked={checked} onChange={handleToggle} />;
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  checked: false,
  theme: 'light', // Assuming your ToggleSwitch accepts a theme prop
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  checked: true,
  theme: 'dark', // Assuming your ToggleSwitch accepts a theme prop
};
