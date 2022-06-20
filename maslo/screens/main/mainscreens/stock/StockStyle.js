import {StyleSheet} from "react-native";
import colors from "../../../../constants/colors/Colors";

export const styles = StyleSheet.create({
    wrapper:
        {
            flex: 1,
            backgroundColor: colors.white,
        },
    container:
        {
            maxWidth: 336,
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    contentHeader: {
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContentHeader:
        {
            fontFamily: 'g-bold',
            fontSize: 24,
            lineHeight: 30,
        },
    btnCatalog:
        {
            fontFamily: 'g-semibold',
            fontSize: 14,
            lineHeight: 16,
            color: colors.scarpaFlow,
            borderColor: colors.jaffa,
            borderWidth: 2,
            borderRadius: 5,
            paddingHorizontal: 18,
            paddingVertical: 8,
        },
    textInfo:
        {
            marginTop: 20,
            fontSize: 18,
            lineHeight: 24,
            fontFamily: 'g-regular',
        },
    newsBlocks:
        {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        }
})