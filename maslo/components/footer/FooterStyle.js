import {StyleSheet} from "react-native";
import colors from "../../constants/colors/Colors";

export const styles = StyleSheet.create({
    wrapper:
        {
            backgroundColor: colors.scarpaFlow,
        },
    container:
        {
            marginTop: 20,
            maxWidth: 336,
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    header:
        {
            flexDirection: 'row',
            marginBottom: 23,
            alignItems: 'center',
        },
    slogan:
        {
            marginLeft: 30,
            justifyContent: 'center',
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap',
        },
    textSlogan:
        {
            fontFamily: 'g-regular',
            fontSize: 12,
            lineHeight: 16,
            color: colors.white,
        },
    footer:
        {
            maxWidth: 246,
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    textManager:
        {
            fontFamily: 'g-semibold',
            fontSize: 14,
            lineHeight: 24,
            color: colors.white,
            textAlign: 'center',
        },
    textPhone:
        {
            fontFamily: 'g-bold',
            fontSize: 18,
            lineHeight: 24,
            color: colors.jaffa,
            textAlign: 'center',
        },
    btn:
        {
            marginTop: 20,
            marginBottom: 32,
        },
})