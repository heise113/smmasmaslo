import React, {useState} from "react";
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


const ModalContact = ({visibleModalContact, setVisibleModalContact}) => {
    const {t} = useTranslation();

    const [radioActiveText, setRadioActiveText] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
    })

    const touchRadioEl = (touchEl) => {
        if (touchEl === 'one') {
            setRadioActiveText((radioActiveText) => {
                radioActiveText.one === true
                    ? radioActiveText.one = false
                    : radioActiveText.one = true
                radioActiveText.two = false;
                radioActiveText.three = false;
                radioActiveText.four = false;
                return {...radioActiveText};
            })
        } else if (touchEl === 'two') {
            setRadioActiveText((radioActiveText) => {
                radioActiveText.two === true
                    ? radioActiveText.two = false
                    : radioActiveText.two = true
                radioActiveText.one = false;
                radioActiveText.three = false;
                radioActiveText.four = false;
                return {...radioActiveText};
            })
        } else if (touchEl === 'three') {
            setRadioActiveText((radioActiveText) => {
                radioActiveText.three === true
                    ? radioActiveText.three = false
                    : radioActiveText.three = true
                radioActiveText.one = false;
                radioActiveText.two = false;
                radioActiveText.four = false;
                return {...radioActiveText};
            })
        } else if (touchEl === 'four') {
            setRadioActiveText((radioActiveText) => {
                radioActiveText.four === true
                    ? radioActiveText.four = false
                    : radioActiveText.four = true
                radioActiveText.one = false;
                radioActiveText.two = false;
                radioActiveText.three = false;
                return {...radioActiveText};
            })
        }
    }

    return (
        <Modal statusBarTranslucent={true} transparent={true} visible={visibleModalContact}>
            <SafeAreaView style={styles.container}>
                <View style={styles.window}>
                    <TouchableOpacity onPress={() => setVisibleModalContact(false)} style={styles.btnClose}>
                        <CloseSvg svgWidth={15} svgHeight={15} svgColor={colors.black}/>
                    </TouchableOpacity>
                    <View style={styles.body}>
                        <Text style={styles.textTitle}>{t('contactModal:title')}</Text>
                        <View style={styles.ulBlock}>
                            <TouchableOpacity style={styles.radioBlock}
                                              onPress={() => {touchRadioEl('one')}}>
                                <View style={radioActiveText.one ? styles.radioActiveOn : styles.radioActiveOff}/>
                                <Text style={styles.textUl}>{t('contactModal:problemOrderText')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.radioBlock}
                                              onPress={() => {touchRadioEl('two')}}>
                                <View style={radioActiveText.two ? styles.radioActiveOn : styles.radioActiveOff}/>
                                <Text style={styles.textUl}>{t('contactModal:questionsOtherText')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.radioBlock}
                                              onPress={() => {touchRadioEl('three')}}>
                                <View style={radioActiveText.three ? styles.radioActiveOn : styles.radioActiveOff}/>
                                <Text style={styles.textUl}>{t('contactModal:problemWorkText')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.radioBlock}
                                              onPress={() => {touchRadioEl('four')}}>
                                <View style={radioActiveText.four ? styles.radioActiveOn : styles.radioActiveOff}/>
                                <Text style={styles.textUl}>{t('contactModal:offerText')}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textInput}>{t('contactModal:textInput')}</Text>
                        <TextInput style={styles.input}/>
                        <TouchableOpacity style={styles.btn}>
                            <OrangeButton text={t('contactModal:button')}/>
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
            textAlign: 'center',
            fontFamily: 'g-bold',
            fontSize: 24,
            lineHeight: 29,
            color: colors.black,
            marginBottom: 10,
        },
    ulBlock:
        {
            marginBottom: 20,
        },
    textUl:
        {
            fontFamily: 'g-regular',
            fontSize: 16,
            lineHeight: 26,
            color: colors.black,
        },
    textInput:
        {
            fontFamily: 'g-regular',
            fontSize: 10,
            lineHeight: 12,
            color: colors.scarpaFlow,
            textAlign: 'center',
            marginBottom: 3,
        },
    input:
        {
            width: '100%',
            height: 121,
            backgroundColor: colors.concrete,
            paddingHorizontal: 15,
            marginBottom: 25,
        },
    btn:
        {
            marginBottom: 40,
        },
    radioBlock:
        {
            flexDirection: 'row',
            alignItems: 'center',
        },
    radioActiveOn:
        {
            height: 10,
            width: 10,
            borderRadius: 50,
            backgroundColor: colors.black,
            marginRight: 8,
        },
    radioActiveOff:
        {
            height: 12,
            width: 12,
            borderRadius: 50,
            backgroundColor: colors.mercury,
            marginRight: 8,
        },
})


export default ModalContact;