import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StickyFooter } from '../../stickyFooter/StickyFooter';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { SectionContainer } from '../sectionContainer/SectionContainer';
import { sectionTypes } from '../sectionContainer/SectionContainerTypes';
import Layoutstyles from './Layout.scss';

export const Layout = ({ children }: sectionTypes.sectionContainerTypes) => {
    return (
        <SafeAreaView style={Layoutstyles.container}>
            <Header title="beautyKlove" />
            <StatusBar style="auto" />
            <SectionContainer style={Layoutstyles.sectionContainer}>
                {children}
            </SectionContainer>
            <Footer />
            <StickyFooter />
        </SafeAreaView>
    );
};

