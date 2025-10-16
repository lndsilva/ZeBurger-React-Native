import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const DATA = [
    {
        id: '1',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '2',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '3',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '4',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '5',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '6',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '7',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '8',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '9',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '10',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '11',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
    {
        id: '12',
        nome: 'Coca-cola',
        imagem: require("../../assets/bebidas/coca_cola.jpg"),

    },
]

const Item = ({ title }) => (
    <View style={styles.itemLista}>
        <View style={styles.grupoLista}>
            <Image
                style={styles.img}
                source={require("../../assets/bebidas/coca_cola.jpg")} />
            <Text style={styles.txtItem}>{title}</Text>
        </View>
    </View>
)

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Bebidas</Text>
            <View style={styles.lista}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.nome} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#1D1D2E"
    },
    titulo: {
        fontSize: 30,
        color: "#fff200ff",
        margin: 30,
    },
    itemLista: {
        backgroundColor: "#ffbf00ff",
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,

    },
    txtItem: {
        fontSize: 30,
    },
    lista: {
        flex: 1,
    },
    img: {
        width: 60,
        height: 60,
    },
    grupoLista: {
        flexDirection: "row",
    }
})