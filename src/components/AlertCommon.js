import {Alert} from "react-native";


const AlertCommon = (errorMessage, title = 'Error', buttons) => {
    Alert.alert(
        title,
        errorMessage,
        buttons ? buttons : [
            {text: 'Cancel'}
        ]
    );
};

export default AlertCommon
