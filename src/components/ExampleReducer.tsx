import React, {useEffect, useState, useReducer} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
  }
  
  const initialState: AuthState = {
    validando:true,
    token: null,
    username: '',
    nombre:''
  }
  
  type LoginPayload = {
    username: string;
    nombre: string;
  }

  type AuthAction = 
  | { type: 'logout'}
  | { type: 'login', payload: LoginPayload }
  ;
  
  const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  
    switch ( action.type ) {
      
      case 'logout':            
        return {
          validando: false,
          token:null,
          nombre:'',
          username:''
        }
      
      case 'login':
        const {nombre, username} = action.payload;
        return {
            validando:false,
            token:'ABC123',
            nombre:nombre,
            username:username,
        }
    
      default:
        return state;
    }
  
  }

const ExampleReducer = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({type:'logout'})
    }, 1500);
  }, []);

  const login = () => {
    dispatch({ 
        type:'login'
        , payload:{
            nombre:'gustavo',
            username:'gus44'
        } })
  }

  if(validando){
    return(
      <View style={{backgroundColor:'yellow', marginTop:50, height:100}}>
        <Text> Validando....</Text>
      </View>
    )
  }
  return (
    <View>  
      {
      (token)
      ?
      (
        <Pressable style={styles.bntLogin}
            onPress={() => {
                console.log('logout')
            }
            }
        >
            <Text style={styles.bntLoginText}>logout</Text>
        </Pressable>
      )
      :
      (
        <Pressable style={styles.bntLogin}
          onPress={login}
        >
          <Text style={styles.bntLoginText}>Login</Text>
        </Pressable>
      )
      
    }

        

          {
            (token)
            ?
            (
                <View style={{backgroundColor:'blue', height:50, marginTop:25}}>
                    <Text> Autenticado como: {nombre}</Text>
                </View>
            ):
            (
                
                <View style={{backgroundColor:'red', height:50}}>
                    <Text> No autenticado....</Text>
                </View>
            )
          }


            

            
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    btnTextoNuevaCita:{
      textAlign:'center',
      color: '#FFF',
      fontSize:18,
      fontWeight:'900',
      textTransform:'uppercase'
    },
    bntLogin:{      
      backgroundColor:'#000',
      marginVertical:10,      
      marginHorizontal:10,
      padding:10,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#FFF',
      position:'relative'
  
    },
    bntLoginText:{
      textAlign:'center',
      color:'#fff',
      textTransform:'uppercase',
      fontWeight:'700'
    }
  })

export default ExampleReducer