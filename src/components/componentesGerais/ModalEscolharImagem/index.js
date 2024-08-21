import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function ModalEscolherImagem() {
  const [modalVisible, setModalVisible] = useState(false);

  return (

    <View>


      <TouchableOpacity>
        <Icon name="camera-outline" size={20} color="#000000" justifyContent="center" onPress={() => setModalVisible(true)} />
      </TouchableOpacity>
  

      <View style={styles.containerModal}>
        <Modal
          animationType="slide"
          swipeDirection="down"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.visualizaAbaixoDoModal}>
            <View style={styles.modalView}>
              <View style={styles.modalMargemDivisa}>
                <TouchableOpacity onPress={() => Alert.alert('Clicou na camera')}>
                  <View style={styles.iconesModal}>
                    <Icon name="camera-outline" size={20} color="#000000"  />
                    <Text style={styles.modalText}>Tirar Foto</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Clicou na Galeria')}>
                  <View style={styles.iconesModal}>
                    <Icon name="image-outline" size={20} color="#000000" />
                    <Text style={styles.modalText}>Escolher Existente</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buttonModal} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.outroTextModal}>Cancelar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  visualizaAbaixoDoModal: { //visualiza o chat abaixo do modal
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  modalMargemDivisa: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  iconesModal: {
    flexDirection: 'row',
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
  },
  modalText: {
    textAlign: 'left',
    alignItems: 'center',
    fontWeight: 'bold', //texto em negrito
    fontSize: 20, //tamanho do texto
    color: '#000000',
    marginLeft: 10,
  },
  buttonModal: { //Botão Cancelar
    padding: 5,
    marginTop: 10,
    width: '100%',
  },
  outroTextModal: { //texto Cancelar
    fontWeight: 'normal',
    textAlign: 'right',
    fontSize: 20, //tamanho do texto
    color: '#000000',
  },

});

