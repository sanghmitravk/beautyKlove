import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import { Header as HeaderRNE, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Headerstyles from './Header.scss'

type HeaderComponentProps = {
    title: string;
    view?: string;
};

export const Header: React.FunctionComponent<HeaderComponentProps> = () => {

    return (
        <SafeAreaProvider>
            <HeaderRNE
                backgroundColor="#fff"
                leftComponent={{
                    icon: 'menu',
                    color: '#000',
                }}
                rightComponent={
                    <View style={Headerstyles.headerRight}>
                        <View>
                            <Icon type="antdesign" name="search1" color="black" />
                        </View>
                        <View>
                            <Icon name="add" color="black" />
                        </View>
                    </View>
                }
                centerComponent={
                    <Image source={{ uri: "https://salonathome.in/wp-content/uploads/2021/12/logo_bk-1.png", width: 150, height: 20 }} />
                }
            />
        </SafeAreaProvider >
    );
};



