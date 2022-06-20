import {StyleSheet} from "react-native";
import colors from "../../constants/colors/Colors";

export const styles = StyleSheet.create({
    scroll: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    wrapper:
        {
            paddingHorizontal: 40,
            paddingVertical: 40,
        },
    logo:
        {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 30,
        },
    textTitle:
        {
            fontFamily: 'g-bold',
            fontSize: 24,
            lineHeight: 29,
            color: colors.black,
            textAlign: 'center',
            marginBottom: 14,
        },
    text1:
        {
            fontFamily: 'g-regular',
            fontSize: 10,
            lineHeight: 12,
            color: colors.scarpaFlow,
            textAlign: 'center',
        },
    text2:
        {
            fontFamily: 'g-regular',
            fontSize: 10,
            lineHeight: 12,
            color: colors.scarpaFlow,
            textAlign: 'center',
        },
    textGet:
        {
            fontFamily: 'g-regular',
            fontSize: 18,
            lineHeight: 21,
            textDecorationColor: colors.black,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            textAlign: 'center',
        },
    input:
        {
            backgroundColor: colors.concrete,
            width: 247,
            height: 40,
            paddingHorizontal: 15,
            marginBottom: 10,
            borderRadius: 5,
        },
    btn:
        {
            marginTop: 20,
            marginBottom: 32,
        },
})