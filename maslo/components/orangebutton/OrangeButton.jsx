import {
    View,
    Text,
} from "react-native";
import {styles} from "./OrangeButtonStyle";


const OrangeButton = (props) => {
    return(
        <View style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

export default OrangeButton;