import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tela1 } from "../screen/tela1";
import { tela2 } from "../screen/tela2";
import { tela3 } from "../screen/tela3";

/**tipagem */
export type NavegacaoStackParams = {
    tela1:undefined,
    tela2:undefined,
    tela3:undefined
}

const Stack = createNativeStackNavigator<NavegacaoStackParams>();
 /**dentro do stack.screen = options={{headerShown:false}} para tirar a barra de cima da tela */
export function StackNavegacao(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="tela1" component={tela1} options={{headerShown:false}}/>   
            <Stack.Screen name="tela2" component={tela2} options={{headerShown:false}}/>
            <Stack.Screen name="tela3" component={tela3} options={{headerShown:false}}/>
        </Stack.Navigator>
    )

}