import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    ActivityIndicator
} from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/burger_logo.png')} />
            <Text style={styles.txtSplash}>Zé Burger</Text>
            <ActivityIndicator size={50} color="#fff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D1D2E"
    },
    logo: {
        width: 150,
        height: 150,
    },
    txtSplash: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
        marginBottom: 10,

    }
})