import React, {useState} from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import {styles} from "./AuthStyle";
import ModalGetAccount from "../../components/modalwindows/ModalAuth";
import {LogoSvg} from "../../constants/svg/Svg";
import OrangeButton from "../../components/orangebutton/OrangeButton";
import {useTranslation} from "react-i18next";


const Auth = ({navigation}) => {
    const { t } = useTranslation();

    const [textLog, setTextLog] = useState('');
    const [textPass, setTextPass] = useState('');

    const login = () => {
        if (textLog !== "" && textPass !== "") {
            return navigation.navigate('Main');
        }
    }

    const [visibleModalGetAccount, setVisibleModalGetAccount] = useState(false);

    return (
        <View style={styles.scroll}>
            <ModalGetAccount visibleModalGetAccount={visibleModalGetAccount}
                             setVisibleModalGetAccount={setVisibleModalGetAccount}/>
            <View style={styles.wrapper}>
                <View style={styles.logo}>
                    <LogoSvg svgWidth={84} svgHeight={50}/>
                </View>
                <Text style={styles.textTitle}>{t('auth:title')}</Text>
                <Text style={styles.text1}>{t('auth:login')}</Text>
                <TextInput style={styles.input} onChangeText={(val) => setTextLog(val)}/>
                <Text style={styles.text2}>{t('auth:pass')}</Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(val) => setTextPass(val)}/>
                <TouchableOpacity style={styles.btn} onPress={login}>
                    <OrangeButton text={t('auth:button')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisibleModalGetAccount(true)}>
                    <Text style={styles.textGet}>{t('auth:getAccount')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Auth;