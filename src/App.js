import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import EsqueceuSenha from "./components/EsqueceuSenha";



export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <EsqueceuSenha/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})