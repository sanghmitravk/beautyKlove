import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import footerstyles from './StickyFooter.scss'
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'home',
        text: 'Home'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'schedule',
        text: 'Book'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'phone',
        text: 'Support'
    },
];


type Item = {
    title: string;
    text: string;
};


const Item = ({ title, text }: Item) => (
    <View>
        <Icon name={title} color="black" />
        <Text>{text}</Text>
    </View>
);

export const StickyFooter = () => {
    const renderItem = ({ item }) => (
        <View >
            <Item title={item.title} text={item.text} />
        </View>
    )


    return (
        <SafeAreaView style={footerstyles.footer}>
            <FlatList
                contentContainerStyle={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: 'space-around'
                }}
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}