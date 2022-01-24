import React from 'react';
import { View, Text } from 'react-native';
import Footerstyles from './Footer.scss';

export const Footer = () => {

    return (
        <View style={Footerstyles.footer}>
            <Text style={Footerstyles.Copyright}>
                Copyright  &copy; 2022 BeautyKlove Private Limited
            </Text>
            <Text style={Footerstyles.Heading}>
                Salon at Home Services in Jamshedpur & Kolkata
            </Text>
        </View>
    );
};


