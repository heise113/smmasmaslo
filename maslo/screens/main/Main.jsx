import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from "../../components/customdrawer/CustomDrawer";
import Stock from "./mainscreens/stock/Stock";
import AboutProduct from "./mainscreens/aboutproduct/AboutProduct";
import Balance from "./mainscreens/balance/Balance";
import Basket from "./mainscreens/basket/Basket";
import Orders from "./mainscreens/orders/Orders";

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Stock"
            screenOptions={{headerShown: false}}
            useLegacyImplementation={true}
        >
            <Drawer.Screen name="Stock" component={Stock}/>
            <Drawer.Screen name="Balance" component={Balance}/>
            <Drawer.Screen name="Basket" component={Basket}/>
            <Drawer.Screen name="Orders" component={Orders}/>
            <Drawer.Screen name="AboutProduct" component={AboutProduct}/>
        </Drawer.Navigator>
    );
}

export default Main;