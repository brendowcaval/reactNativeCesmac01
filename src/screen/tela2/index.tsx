import { RouteProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput,StyleSheet } from 'react-native';
import { NavegacaoStackParams } from '../../navigations/stack';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

const Separator = () => (
  <View style={style.separator} />
);

export interface tela2Props {
 
}
export function tela2 (props: tela2Props) {

  type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela2'>
   const nav= useNavigation<navPros>();
  //const nav= useNavigation();
    return (
      <View style={style.input}>
          
          <Text style={{fontWeight:'bold',fontSize:20}}>
           Reset your password
          {"\n"}
          {"\n"}
         </Text>
         <Text> We'll email you instructions to reset the password. {"\n"}{"\n"}</Text>
         <Text style={{fontWeight:'bold',paddingRight:0}}>Email</Text>
         <TextInput
           style={style.textInput}
           keyboardType="numeric"
            />
                 <Separator/>
                 <Separator/>  
          <Button
            title="Reset password"
            color="#008000"
            onPress={function(){
              console.log('password change')
            }}
          />
          <Separator/>
          <Text style={style.baseText} onPress={() => nav.navigate('tela1')} >Return to login</Text>
       
         

        
      </View>
    );
}

const style = StyleSheet.create({
    baseText: {
      color:'#008000'
    },
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
});
