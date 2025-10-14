import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from "react-native";


export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitulo}>Validação</Text>
            <Text style={styles.txtUsuario}>Olá Senac!</Text>
            <Text style={styles.txtInformacao}>Insira seu e-mail para continuar</Text>
            <View style={styles.boxInput}>
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    maxLength={100}
                    placeholderTextColor="#fff"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtButton}>Esqueci minha senha</Text>
                </TouchableOpacity>



            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D1D2E"
    },

    txtTitulo: {
        fontSize: 35,
        color: "#fff",
        fontFamily: "Raleway-VariableFont_wght",
    },
    txtUsuario: {
        fontSize: 25,
        margin: 20,
        color: "#fff",
    },
    txtInformacao: {
        fontSize: 20,
        color: "#fff",
        margin: 10,

    },
    cadTitulo: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 30,
        textAlign: "center"
    },
    boxInput: {
        paddingVertical: 34,
        paddingHorizontal: 14,
    },
    input: {
        width: 350,
        height: 50,
        color: "#fff",
        backgroundColor: "#36366fff",
        marginBottom: 12,
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    button: {
        width: 350,
        height: 40,
        backgroundColor: "#3fffa3",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    buttonLogin: {
        width: 350,
        height: 40,
        backgroundColor: "#a60202ff",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    txtButtonLogin: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    txtButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#101026",
    },
    txtCadastro: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    txtTemCadastro: {
        fontSize: 18,
        color: "#fff"
    },
    txtEntrar: {
        color: "#fab300ff",
        fontSize: 18,
        marginLeft: 10,
    }

})