import * as React from 'react';
import {  SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

export interface tela3Props {
}

export function tela3 (props: tela3Props) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela3'>
    const nav= useNavigation<navPros>();

   

    
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.loginContainer}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Sign up</Text>
            <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
                isValid, }) => (
                
              <>
                <Text style={{fontWeight:'bold'}}>Email</Text>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                  {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }
                <Text style={{fontWeight:'bold'}}>Password</Text>
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }
                
                <Button onPress={handleSubmit} title="Sign up for free" color="#008000"
         disabled={!isValid} />
                 
                 <Text style={styles.baseText} onPress={() => nav.navigate('tela1')} >Already have an account? Log in</Text>
              </>
            )}
          </Formik>
          </View>
        </SafeAreaView>
      </>
    );

}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginContainer: {
      width: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
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
      errorText: {
        fontSize: 10,
        color: 'red',
      },
      baseText: {
        color:'#008000'
      },
  })
  





  




   





