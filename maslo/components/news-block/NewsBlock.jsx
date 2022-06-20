import {
    TouchableOpacity,
    Image,
    Text,
    View
} from "react-native";
import {styles} from "./NewsBlockStyle";


const NewsBlock = (props) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('AboutProduct')}>
                <Image style={styles.img} source={props.img}/>
                <Text style={styles.textData}>
                    {props.textData}
                </Text>
                <Text style={styles.textTitle}>
                    {props.textTitle}
                </Text>
                <Text style={styles.textDescription}>
                    {props.textDescription}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewsBlock;