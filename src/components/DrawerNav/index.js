import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from "../Login"
import Validacao from "../Validacao"
import CadastrarUsuarios from "../CadastrarUsuarios"

const Drawer = createDrawerNavigator()


export default props => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#038e93ff",
                    width: 300,
                },
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: "bold",
                    color:"#f6ff00ff",
                },
                
                drawerActiveTintColor: "blue",
                drawerInactiveTintColor: "gray",
            }}
        >
            <Drawer.Screen name="Login" component={Login}
                options={{
                    title: "Login",
                    drawerLabel: "Login",
                    drawerIcon: () => (
                        <Icon
                            name={"user-circle"}
                            size={24}
                            color="#000000ff" />
                    )
                }}
            />
            <Drawer.Screen name="Validacao" component={Validacao}
                options={{
                    title: "Validação",
                    drawerLabel: "Validação",
                    drawerIcon: () => (
                        <Icon
                            name={"check"}
                            size={24}
                            color="#000000ff" />
                    )
                }}
            />
            <Drawer.Screen name="CasdastroUsuarios"
                component={CadastrarUsuarios}
                options={{
                    title: "Cadastrar usuários",
                    drawerLabel: "Cadastrar usuários",
                    drawerIcon: () => (
                        <Icon
                            name={"user-plus"}
                            size={24}
                            color="#000000ff" />
                    )
                }}

            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})