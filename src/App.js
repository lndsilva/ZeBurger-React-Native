import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import MenuPrincipal from "./components/MenuPrincipal";

// import Validacao from "./components/Validacao"
// import CadastrarUsuarios from "./components/CadastrarUsuarios";
// import EsqueceuSenha from "./components/EsqueceuSenha";



export default props => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <EsqueceuSenha/> */}
            {/* <CadastrarUsuarios/> */}
            {/* <Validacao /> */}
            <MenuPrincipal />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})