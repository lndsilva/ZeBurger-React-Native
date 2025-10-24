import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from "../Login"
import Validacao from "../Validacao"
import CadastrarUsuarios from "../CadastrarUsuarios"


const Tab = createMaterialTopTabNavigator()


export default props => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarContentContainerStyle: "#b3ff00ff",
            tabBarIndicatorContainerStyle: "#fbff00ff",
            tabBarInactiveTintColor: "#fff",
            tabBarActiveTintColor: "#fdf900ff",
            tabBarLabelStyle: { fontSize: 14, },
            tabBarItemStyle: { height: 100, },
            tabBarStyle: {
                backgroundColor: "#1D1D2E",

            },
            tabBarShowIcon: true,
            tabBarShowLabel: true,
            tabBarIndicatorStyle: {
                backgroundColor: "#cfd201ff"
            },
        }}>
            <Tab.Screen name="Login" component={Login}
                options={{
                    title: "Login",
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? "user-circle" : "user-circle-o"}
                            size={24}
                            color="#fff" />
                    )
                }}
            />
            <Tab.Screen name="Validacao" component={Validacao}
                options={{
                    title: "Validação",
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? "check" : "check-circle"}
                            size={24}
                            color="#fff" />
                    )
                }}
            />
            <Tab.Screen name="CadastrarUsuarios" component={CadastrarUsuarios}
                options={{
                    title: "Usuários",
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? "user-plus" : "user"}
                            size={24}
                            color="#fff" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}