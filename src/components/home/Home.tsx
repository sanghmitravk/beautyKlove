import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Footer } from '../footer/Footer';


export const Home = () => {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
            <ScrollView >
                <View style={{ height: 2000 }}>
                    <Text style={{ fontSize: 30, color: '#c9246b', textAlign: 'center', fontWeight: 'bold', paddingBottom: 4, paddingTop: 4 }}>Salon At Home</Text>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});