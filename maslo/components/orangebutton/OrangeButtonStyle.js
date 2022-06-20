import {Platform, StyleSheet} from "react-native";
import colors from "../../constants/colors/Colors";

export const styles = StyleSheet.create({
    button:
        {
            backgroundColor: colors.jaffa,
            justifyContent: 'center',
            borderRadius: 5,
            ...Platform.select({
                ios: {
                    shadowColor: colors.black,
                    shadowOffset: {width: 1, height: 3},
                    shadowOpacity: 0.2,
                },
                android: {
                    elevation: 5,
                },
            }),
        },
    text:
        {
            fontFamily: 'g-semibold',
            color: colors.white,
            fontSize: 18,
            textAlign: 'center',
            paddingVertical: 13,
        },
})