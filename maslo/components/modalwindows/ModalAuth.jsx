import React from "react";
import {
    Modal,
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {CloseSvg} from "../../constants/svg/Svg";
import colors from "../../constants/colors/Colors";
import OrangeButton from "../orangebutton/OrangeButton";
import {useTranslation} from "react-i18next";


const ModalAuth = ({visibleModalGetAccount, setVisibleModalGetAccount}) => {
    const { t } = useTranslation();
    return (
        <Modal statusBarTranslucent={true} transparent={true} visible={visibleModalGetAccount}>
            <SafeAreaView style={styles.container}>
                <View style={styles.window}>
                        <TouchableOpacity onPress={() => setVisibleModalGetAccount(false)} style={styles.btnClose}>
                            <CloseSvg svgWidth={15} svgHeight={15} svgColor={colors.black}/>
                        </TouchableOpacity>
                    <View style={styles.body}>
                        <Text style={styles.textTitle}>
                            {t('authModal:title')}
                        </Text>
                        <Text style={styles.textEmail}>{t('authModal:email')}</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.textPhone}>
                            {t('authModal:textCall')}{'\n'}{t('authModal:phone')}
                        </Text>
                        <TouchableOpacity style={styles.btnGet}>
                            <OrangeButton text={t('authModal:button')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:
        {
            backgroundColor: colors.blackTransparent,
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
    window:
        {
            borderRadius: 10,
            maxWidth: 335,
            backgroundColor: colors.white,
        },
    body:
        {
            paddingHorizontal: 44,
        },
    btnClose:
        {
            alignSelf: 'flex-end',
            marginTop: 23,
            marginRight: 23,
            marginBottom: 23,
        },
    textTitle:
        {
            fontFamily: 'g-bold',
            fontSize: 24,
            lineHeight: 29,
            marginBottom: 22,
            textAlign: 'center',
        },
    textEmail:
        {
            fontFamily: 'g-regular',
            fontSize: 10,
            lineHeight: 12,
            textAlign: 'center',
        },
    input:
        {
            backgroundColor: colors.concrete,
            width: 247,
            height: 40,
            paddingHorizontal: 15,
        },
    textPhone:
        {
            fontFamily: 'g-regular',
            fontSize: 16,
            lineHeight: 26,
            textAlign: 'center',
            padding: 20,
        },
    btnGet:
        {
            marginBottom: 40,
        },
})

export default ModalAuth;