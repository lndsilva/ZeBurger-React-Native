import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



export default props => {
    return (

        <View style={styles.container}>

            <TouchableOpacity style={styles.buttonVoltar}>
                <Icon
                    name="arrow-left"
                    size={20}
                    color="#ffe600ff" />
                <Text style={styles.txtButtonVoltar}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.txtTitulo}>Recuperação de senha</Text>
            <Text style={styles.txtInformacao}>Agora, digite o código que te enviamos por e-mail e celular para criar nova senha</Text>

            <View style={styles.boxInput}>
                <TextInput
                    placeholder="0"
                    style={styles.input}
                    maxLength={1}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="0"
                    style={styles.input}
                    maxLength={1}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="0"
                    style={styles.input}
                    maxLength={1}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="0"
                    style={styles.input}
                    maxLength={1}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="0"
                    style={styles.input}
                    maxLength={1}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder="0"
                    style={styles.input}
                    maxLength={1}
                    placeholderTextColor="#fff"
                />
            </View>
            <Text style={styles.txtTempo}>0:06</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtButton}>Continuar</Text>
            </TouchableOpacity>
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
    buttonVoltar: {
        flexDirection:"row",
        margin: 30,
        alignSelf: "flex-start",
        marginBottom: 100,
        borderColor: "#ffe600ff",
        borderWidth: 2,
        width: 150,
        height: 40,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    txtButtonVoltar: {
        padding:10,
        color: "#ffe600ff",
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
        flexDirection: "row",
        paddingVertical: 34,
        paddingHorizontal: 14,
    },
    input: {
        width: 60,
        height: 70,
        color: "#fff",
        backgroundColor: "#36366fff",
        marginBottom: 12,
        maxLength: 5,
        marginRight: 5,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "center",
        fontSize: 19,
    },
    button: {
        width: 385,
        height: 45,
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
    txtInformacao: {
        marginTop: 20,
        color: "#fff",
        width: 350,
        textAlign: "center",
        fontSize: 18,
    },
    txtTempo: {
        fontSize: 20,
        color: "#ffae00ff",
        margin: 20,
    }

})