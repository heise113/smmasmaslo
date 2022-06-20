import {StyleSheet} from "react-native";
import colors from "../../constants/colors/Colors";

export const styles = StyleSheet.create({
    wrapper:
        {
            backgroundColor: colors.concrete,
            padding: 10,
            marginTop: 25,
            marginBottom: 10,
            borderRadius: 5,
        },
    container:
        {
            maxWidth: 139,
            width: '100%',
        },
    img:
        {
            maxWidth: 139,
            width: '100%',
            height: 82,
            backgroundColor: colors.white,
            borderRadius: 5,
            marginBottom: 10,
        },
    textData:
        {
            fontFamily: 'g-bold',
            fontSize: 9,
            lineHeight: 16,
            color: colors.jumbo,
            marginBottom: 3,
        },
    textTitle:
        {
            fontFamily: 'g-semibold',
            fontSize: 12,
            lineHeight: 16,
            color: colors.black,
            marginBottom: 3,
        },
    textDescription:
        {
            fontFamily: 'g-regular',
            fontSize: 10,
            lineHeight: 14,
            color: colors.scarpaFlow,
        },
})