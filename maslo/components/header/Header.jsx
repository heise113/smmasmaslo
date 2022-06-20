import {
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    MenuSvg,
    SearchSvg,
    ArrowSvg,
    CartSvg,
    PurseSvg,
    BasketSvg,
} from "../../constants/svg/Svg";
import {styles} from "./HeaderStyle";


const Header = ({navigation}) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.headerInner}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MenuSvg svgWidth={30} svgHeight={21}/>
                </TouchableOpacity>
                <View style={styles.search}>
                    <SearchSvg svgWidth={13} svgHeight={14}/>
                    <TextInput style={styles.input}/>
                    <ArrowSvg svgWidth={9} svgHeight={5}/>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Balance')}>
                        <PurseSvg svgWidth={20} svgHeight={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
                        <CartSvg svgWidth={23} svgHeight={23}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                        <BasketSvg svgWidth={21} svgHeight={19}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header;