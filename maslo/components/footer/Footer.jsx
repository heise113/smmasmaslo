import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import React, {useState} from "react";
import {styles} from "./FooterStyle";
import {LogoWhiteSvg} from "../../constants/svg/Svg";
import ModalContact from "../modalwindows/ModalContact";
import OrangeButton from "../orangebutton/OrangeButton";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();

    const [visibleModalContact, setVisibleModalContact] = useState(false);

    return (
        <View style={styles.wrapper}>
            <ModalContact visibleModalContact={visibleModalContact}
                          setVisibleModalContact={setVisibleModalContact}/>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <LogoWhiteSvg svgWidth={69} svgHeight={42}/>
                    </View>
                    <View style={styles.slogan}>
                        <Text style={styles.textSlogan}>{t('footer:text')} {t('footer:text')}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textManager}>
                        {t('footer:manager')}
                    </Text>
                    <Text style={styles.textPhone}>
                        {t('footer:phone')}
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => setVisibleModalContact(true)}>
                        <OrangeButton text={t('footer:button')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Footer;