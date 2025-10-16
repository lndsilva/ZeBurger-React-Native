import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";


const DATA = [
    {
        id: '1',
        title: 'Smash',
        imagem: require("../../assets/burger.jpg")
    },
    {
        id: '2',
        title: 'Smash Bacon',
        imagem: require("../../assets/burger_salad.jpg")

    },
    {
        id: '3',
        title: 'Esplendido',
    },
    {
        id: '4',
        title: 'Smash Super',
    },
    {
        id: '5',
        title: 'Empanado Supremo',
    },
    {
        id: '6',
        title: 'Smash Duplo',
    },
    {
        id: '7',
        title: 'Smash Duplo Bacon',
    },
    {
        id: '8',
        title: 'Churrasco',
    },
    {
        id: '9',
        title: 'Proeminente Torre',
    },
    {
        id: '10',
        title: 'Ardiloso',
    },
]


const LancheRender = ({ title}) => (
    <View style={styles.item}>
        <Image
            source={require("../../assets/burger_salad.jpg")}
            style={styles.img} />
        <View style={styles.grupoLancheRender}>
            <Text style={styles.texto}>{title}</Text>
            <Text style={styles.subTexto}>Pão crocante, 100g de alcatra, queijo cheddar, alface americana, tomate fresco e maionese suprema</Text>
            <Text style={styles.subTextoK}>200 Kcal - 150g</Text>
        </View>
    </View>
)

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Hamburgers</Text>
            <View style={styles.grupoView}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <LancheRender title={item.title} />}
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
        backgroundColor: "#1D1D2E",
    },
    titulo: {
        margin: 30,
        fontSize: 30,
        color: "#fff200ff",
    },
    grupoView: {
        flex: 1,
    },
    item: {
        backgroundColor: "#ffbf00ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 6,
    },
    texto: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
    img: {
        width: 130,
        height: 130,
        alignSelf: "center",
    },
    subTexto: {
        margin: 10,
        width: 230,
        textAlign: "justify",
    },
    subTextoK: {
        margin: 10,
    },
    grupoLancheRender:{
        margin: 10,
    }
})