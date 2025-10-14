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
            <Image
                style={styles.imgLogo}
                source={require('../../assets/burger_logo.png')} />
            <Text style={styles.txtTitulo}>Zé Burger</Text>
            <View style={styles.boxInput}>
                <TextInput
                    placeholder="Insira seu e-mail"
                    style={styles.input}
                    maxLength={100}
                    placeholderTextColor="#fff"

                />
                <TextInput
                    placeholder="Insira sua senha"
                    style={styles.input}
                    maxLength={12}
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                />
                <View style={styles.txtEsqueceSenha}>
                    <Text style={styles.txtEsqueceuSenha}>Esqueceu sua senha?</Text>
                    <Text style={styles.txtCliqueAqui}>Clique aqui.</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtButton}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastar}>
                    <Text style={styles.txtButtonCadastar}>Cadastrar</Text>
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
    imgLogo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginBottom: 18,
    },
    txtTitulo: {
        fontSize: 35,
        color: "#fff",
        fontFamily: "Raleway-VariableFont_wght",
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
        marginTop: 15,
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
    txtEsqueceSenha: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: 15,
    },
    txtEsqueceuSenha: {
        color: "#fff",
        fontSize: 15,
    },
    txtCliqueAqui: {
        fontSize: 15,
        color: "#ffa600ff",
        marginLeft: 8,
    }

})