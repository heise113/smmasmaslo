import {View, ScrollView, Text} from "react-native";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import {styles} from "./OrdersStyle";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const Orders = ({navigation}) => {
    const { t } = useTranslation();

    const [scrollHeight, setScrollHeight] = useState();
    return (
        <View style={styles.wrapper}>
            <Header navigation={navigation}/>
            <ScrollView
                style={styles.scroll}
                onLayout={(event) => {
                    setScrollHeight(event.nativeEvent.layout.height)
                }}>
                <View style={{minHeight: scrollHeight}}>
                    <View style={styles.contentInner}>
                        <Text>
                            {t('orders:orders')}
                        </Text>
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Orders;