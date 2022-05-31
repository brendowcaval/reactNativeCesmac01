/**tsrnsl : para criar a base do projeto */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, ActivityIndicator, Button, TextInput, StyleSheet, Linking} from 'react-native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';


const Separator = () => (
  <View style={style.separator} />
);


export interface tela1Props {
}
/**tag view é tipo uma div do html */
export function tela1 (props: tela1Props) {
    /**o set é para poder mudar o valor */
    const [titleText] = React.useState("Log in");
    const [valor1, setValor1]=React.useState(10);
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela1'>

    const nav= useNavigation<navPros>();
   
    

    return (
      <View style={style.input}> 
        
        
        
         <Text style={{fontWeight:'bold',fontSize:20}}>
         {titleText}
          {"\n"}
          {"\n"}
         </Text>
         <Text style={{fontWeight:'bold',paddingRight:0}}>Email</Text>
         <TextInput
           style={style.textInput}
           keyboardType="numeric"
            />
            <Separator/>
            <Text style={{fontWeight:'bold',paddingRight:0}}>Password</Text>
          <TextInput 
           style={style.textInput}
           placeholderTextColor="#9a73ef"
           returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
           />
          

          {/* hyperlink*/}
          <Text style={{color: '#008000'}}
          onPress={() => nav.navigate('tela2')}>
           forgot password?
          </Text>
          
         

         <Button
            title="Log in"
            color="#008000"
            onPress={function(){
              console.log('entrou')
            }}
          />
           <Separator/>
          <Text style={{fontWeight:'bold'}}>
            Need an account?
          </Text>
          

          <Text style={{color: '#008000'}}
          onPress={() => nav.navigate('tela3')}>
           Sing up
          </Text>
      


       
          
          

          
      </View>
    );
}

/**css externo */

const style=StyleSheet.create({
    input: {
      flex:1,
      padding:20,
      margin:20,
      alignItems:'center',
      justifyContent:'center'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
})