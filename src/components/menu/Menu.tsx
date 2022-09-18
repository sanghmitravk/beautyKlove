import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { MainTabScreen } from '../mainTabScreen/MainTabScreen';


const DrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export const Menu = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        </Drawer.Navigator>
    );
}

