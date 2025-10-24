import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Login from "../components/Login"
import EsqueceuSenha from "../components/EsqueceuSenha"
import Splash from "../components/Splash"
import Validacao from "../components/Validacao"
import CadastrarUsuarios from "../components/CadastrarUsuarios"

const Drawer = createDrawerNavigator()

export default props => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer />}>
            <Drawer.Screen name="Splash" component={Splash} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
            <Drawer.Screen name="Validacao" component={Validacao} />
            <Drawer.Screen name="CadastrarUsuarios" component={CadastrarUsuarios} />
        </Drawer.Navigator>       
    )
}