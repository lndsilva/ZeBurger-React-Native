import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from "../Login"
import Validacao from "../Validacao"
import CadastrarUsuarios from "../CadastrarUsuarios"
import EsqueceuSenha from "../EsqueceuSenha"


const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#1D1D2E",
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: "#ff0000ff",
                tabBarInactiveBackgroundColor: "#eeff00ff",
            }}
        >
            <Tab.Screen name="Validacao" component={Validacao} options={{
                title: "Validação", tabBarIcon: (focused) => (
                    <Icon size={24} name="check" />
                )
            }} />
            <Tab.Screen name="Login" component={Login} options={{
                title: "Login", tabBarIcon: (focused) => (
                    <Icon size={24} name={focused ? 'user' : 'user-outline'}
                        color={focused ? "#fff" : "#6e0860ff"}
                    />
                )
            }} />
            <Tab.Screen name="CadastarUsuarios" component={CadastrarUsuarios}
                options={{
                    title: "Usuários", tabBarIcon: () => (
                        <Icon size={24} name="user-plus" />
                    )
                }} />
            <Tab.Screen name="EsqueceuSenha" component={EsqueceuSenha}
                options={{
                    title: "Recuperar", tabBarIcon: () => (
                        <Icon size={24} name="plus" />
                    )
                }} />
        </Tab.Navigator>
    )

}