import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


import DrawerNav from "./components/DrawerNav";
// import TabBarNav from "./components/TabBarNav";
// import BottomNav from "./components/BottomNav";
// import Bebidas from "./components/Bebidas";
// import Lanches from "./components/Lanches";
// import MenuPrincipal from "./components/MenuPrincipal";
// import Validacao from "./components/Validacao"
// import CadastrarUsuarios from "./components/CadastrarUsuarios";
// import EsqueceuSenha from "./components/EsqueceuSenha";



export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {/* <EsqueceuSenha/> */}
                {/* <CadastrarUsuarios/> */}
                {/* <Validacao /> */}
                {/* <MenuPrincipal /> */}
                {/* <Lanches/> */}
                {/* <Bebidas/> */}
                {/* <BottomNav /> */}
                {/* <TabBarNav/> */}
                <DrawerNav/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})