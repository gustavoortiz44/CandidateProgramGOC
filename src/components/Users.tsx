import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Pressable,
    Modal,
    Alert
} from 'react-native';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, ReqResListadoAlbums } from '../interfaces/reqRes';

const Users = () => {


  const [usuarios, setUsuarios] = useState<ReqResListado[]>([]);
  const [albums, setAlbums] = useState<ReqResListadoAlbums[]>([]);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    
    loadUsers();
    loadAlbums();
  }, [])

  const loadUsers = async() => {
    //call
    await reqResApi.get<ReqResListado>('/users')
    .then( resp => {                    
        setUsuarios(resp.data)
    })
    .catch(console.log)
  }

  const loadAlbums = async() => {
    //call
    await reqResApi.get<ReqResListadoAlbums>('/albums')
    .then( resp => {                   
        setAlbums(resp.data);
        console.log(JSON.stringify(resp.data, null, 2))
    })
    .catch(console.log)
  }


  
  const renderItem = (usuario: ReqResListado) => {
    return(
        <View key={usuario.id.toString()}>        
          <Pressable
            style={styles.btnNuevaCita}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.btnTextoNuevaCita}>{usuario.name}</Text>
          </Pressable>
        </View>
        
    )
  }

  const renderItemAlbums = (albums: ReqResListadoAlbums) => {
    return(
        <View key={albums.id.toString()}>        
          <Text>{albums.id}</Text>
          <Text style={styles.userNameStyle}>{albums.title}</Text>                              
        </View>
        
    )
  }
    
  return (
    <ScrollView>
      <View>
        <Text style={styles.userStyle}>Users</Text>
      </View>
      <View>
        {
          usuarios.map( renderItem )    
        }
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            {
              
              albums.map( renderItemAlbums )

            }


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  userStyle:{
    borderWidth: 4,
    borderColor: '#20232a',
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  userNameStyle:{
    borderWidth: 4,
    paddingVertical: 5,
    paddingLeft: 10,    
    borderColor: '#20232a',    
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'left',
    fontSize:15,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnNuevaCita:{
    backgroundColor:'#6D28D9',
    padding: 15,
    marginHorizontal:20,
    marginRight:20,
    marginTop:20,
    borderRadius:10
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color: '#FFF',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase'
  },
})

export default Users