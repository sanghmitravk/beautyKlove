import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Menu } from '../menu/Menu';

export const Layout = () => {
    return (
        <NavigationContainer>
            <Menu />
        </NavigationContainer>
    );
};

