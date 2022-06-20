import {Platform, StatusBar, StyleSheet} from "react-native";
import colors from "../../constants/colors/Colors";

export const styles = StyleSheet.create({
    wrapper:
        {
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            backgroundColor: colors.scarpaFlow,
        },
    headerInner:
        {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: 15,
            maxWidth: 336,
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    search:
        {
            alignItems: 'center',
            padding: 7,
            width: 177,
            flexDirection: 'row',
            backgroundColor: colors.jumbo,
            borderRadius: 5,
        },
    input:
        {
            flex: 1,
        },
    icons:
        {
            width: 100,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
})