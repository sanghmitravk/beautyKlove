import React from 'react';
import { View } from 'react-native';
import { sectionTypes } from './SectionContainerTypes';

export const SectionContainer = ({ children }: sectionTypes.sectionContainerTypes) => {
    return (
        <View>{children}</View>
    );
};

