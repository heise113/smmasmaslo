import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import {
    LogoWhiteSvg,
    CloseSvg,
    ArrowDownSvg,
    ArrowRightSvg,
    LogoutSvg
} from "../../constants/svg/Svg"
import {styles} from "./CustomDrawerStyle";
import colors from "../../constants/colors/Colors";
import {useTranslation} from "react-i18next";

const CustomDrawer = (props) => {
    const {t} = useTranslation();

    const [stateCategory, setStateCategory] = useState({
        one: false,
        two: false,
    });

    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.header}>
                <View style={styles.container}>
                    <View style={styles.headerInner}>
                        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                            <CloseSvg svgWidth={23} svgHeight={33} svgColor={colors.white}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Stock')}>
                            <LogoWhiteSvg svgWidth={69} svgHeight={58}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
                            <LogoutSvg svgWidth={23} svgHeight={32}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.catalog}>
                <View style={styles.container}>
                    <ScrollView>
                        <View>
                            <TouchableOpacity style={styles.category} onPress={() => {
                                stateCategory.one === true
                                    ? setStateCategory((stateCategory) => {
                                        stateCategory.one = false;
                                        return {...stateCategory};
                                    })
                                    :
                                    setStateCategory((stateCategory) => {
                                        stateCategory.one = true;
                                        return {...stateCategory};
                                    })
                            }}>
                                <Text style={styles.mainText}>{t('drawer:category')}</Text>
                                {stateCategory.one === true ? (
                                    <View style={styles.svgArrow}>
                                        <ArrowDownSvg svgWidth={15} svgHeight={15}/>
                                    </View>
                                ) : (
                                    <View style={styles.svgArrow}>
                                        <ArrowRightSvg svgWidth={15} svgHeight={15}/>
                                    </View>
                                )}
                            </TouchableOpacity>
                            {stateCategory.one === true ? (
                                <View>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null}

                            <TouchableOpacity style={styles.category} onPress={() => {
                                stateCategory.two === true
                                    ? setStateCategory((stateCategory) => {
                                        stateCategory.two = false;
                                        return {...stateCategory};
                                    })
                                    :
                                    setStateCategory((stateCategory) => {
                                        stateCategory.two = true;
                                        return {...stateCategory};
                                    })
                            }}>
                                <Text style={styles.mainText}>{t('drawer:category')}</Text>
                                {stateCategory.two === true ? (
                                    <View style={styles.svgArrow}>
                                        <ArrowDownSvg svgWidth={15} svgHeight={15}/>
                                    </View>
                                ) : (
                                    <View style={styles.svgArrow}>
                                        <ArrowRightSvg svgWidth={15} svgHeight={15}/>
                                    </View>
                                )}
                            </TouchableOpacity>
                            {stateCategory.two === true ? (
                                <View>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.insideText}>{t('drawer:subcategory')}</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null}

                            <TouchableOpacity style={styles.category}>
                                <Text style={styles.mainText}>{t('drawer:category')}</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer;