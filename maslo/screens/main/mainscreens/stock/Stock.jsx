import React, {useState} from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {styles} from "./StockStyle"
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import NewsBlock from "../../../../components/news-block/NewsBlock";
import {useTranslation} from "react-i18next";

let state = {
    newsBlocks: [
        {
            id: 1,
            img: require('../../../../assets/img/news-1.png'),
            textData: '20 марта  2020',
            textTitle: 'Название акции в две строки максимум',
            textDescription: 'Краткое описание акции в две-три строки______________________________________',
        },
        {
            id: 2,
            img: require('../../../../assets/img/news-2.png'),
            textData: '20 марта  2020',
            textTitle: 'Название акции в две строки максимум',
            textDescription: 'Краткое описание акции в две-три строки______________________________________',
        },
        {
            id: 3,
            img: require('../../../../assets/img/news-3.png'),
            textData: '20 марта  2020',
            textTitle: 'Название акции в две строки максимум',
            textDescription: 'Краткое описание акции в две-три строки______________________________________',
        },
        {
            id: 4,
            img: require('../../../../assets/img/news-4.png'),
            textData: '20 марта  2020',
            textTitle: 'Название акции в две строки максимум',
            textDescription: 'Краткое описание акции в две-три строки______________________________________',
        },
    ]
}


const Stock = ({navigation}) => {
    const {t} = useTranslation();

    const [scrollHeight, setScrollHeight] = useState();

    let newsElements = state.newsBlocks.map(n =>
        <NewsBlock key={n.id}
                   img={n.img}
                   textData={n.textData}
                   textTitle={n.textTitle}
                   textDescription={n.textDescription}
                   navigation={navigation}
        />)

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView
                style={{height: '100%'}}
                onLayout={(event) => {
                    setScrollHeight(event.nativeEvent.layout.height)
                }}>
                <View style={{minHeight: scrollHeight}}>
                    <View style={styles.wrapper}>
                        <View style={styles.container}>
                            <View style={styles.contentHeader}>
                                <Text style={styles.textContentHeader}>{t('stock:stock')}</Text>
                                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                    <Text style={styles.btnCatalog}>
                                        {t('stock:button')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textInfo}>
                                {t('stock:textInfo')}
                            </Text>
                            <View style={styles.newsBlocks}>
                                {newsElements}
                            </View>
                        </View>
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Stock;