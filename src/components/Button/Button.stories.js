import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button theme={"primary"} label={"Primary"} />;

export const Secondary = () => (
  <Button onClick={action('clicked')} theme={"secondary"} label={"Second"}>
  </Button>
);

Secondary.story = {
  name: 'Secondary Button',
};
