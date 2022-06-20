import {Platform, StatusBar, StyleSheet} from "react-native";
import colors from "../../constants/colors/Colors";

export const styles = StyleSheet.create({
    wrapper:
        {
            flex: 1,
            backgroundColor: colors.scarpaFlow,
        },
    header:
        {
            marginTop: 53,
        },
    headerInner:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    container:
        {
            maxWidth: 222,
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    category:
        {
            flexDirection: 'row',
            alignItems: 'center',
        },
    catalog:
        {
            flex: 1,
            marginTop: 20,
        },
    svgArrow:
        {
          paddingBottom: 8,
        },
    mainText:
        {
            fontFamily: 'r-regular',
            fontSize: 18,
            lineHeight: 21,
            color: colors.white,
            marginBottom: 10,
            marginRight: 8,
        },
    insideText:
        {
            fontFamily: 'g-regular',
            fontSize: 16,
            lineHeight: 24,
            color: colors.white,
            marginBottom: 10,
            marginLeft: 40,
        },
})