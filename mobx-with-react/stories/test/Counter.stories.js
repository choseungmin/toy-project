import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Counter from '../../src/components/Counter';

export default {
    title: 'Counter',
    component: Counter,
};

export const counter = () => <Counter/>;
