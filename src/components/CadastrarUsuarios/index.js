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
            <Text style={styles.txtTitulo}>Cadastrar usuários</Text>
            <View style={styles.boxInput}>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    maxLength={100}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    maxLength={12}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="Telefone"
                    style={styles.input}
                    maxLength={12}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    maxLength={12}
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtButton}>Cadastre-se</Text>
                </TouchableOpacity>

                <Text style={styles.cadTitulo}>-----------  Cadastre-se com  -----------</Text>

                <View style={styles.imgSociais}>
                    <Image style={styles.imgGoogle} source={require('../../assets/google.png')} />
                    <Image style={styles.imgFacebook} source={require('../../assets/facebook.png')} />
                </View>

                <View style={styles.txtCadastro}>
                    <Text style={styles.txtTemCadastro}>Tem cadastro?</Text>
                    <Text style={styles.txtEntrar}>Entrar.</Text>
                </View>

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
    imgGoogle: {
        width: 30,
        height: 30,
        margin: 10,
    },
    imgFacebook: {
        width: 30,
        height: 30,
        margin: 10,
    },
    imgSociais: {
        marginBottom: 5,
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    txtTitulo: {
        fontSize: 35,
        color: "#fff",
        fontFamily: "Raleway-VariableFont_wght",
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
        marginTop: 40,
        marginBottom: 40,
    },
    buttonCadastar: {
        width: 350,
        height: 40,
        backgroundColor: "#a60202ff",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    txtButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#101026",
    },
    txtButtonCadastar: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffffff",
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