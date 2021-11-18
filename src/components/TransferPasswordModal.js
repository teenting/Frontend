// not used

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';
import styled from 'styled-components/native';
import TouchableScale from 'react-native-touchable-scale';

const ModalHeader = styled.View`

`;

export default function TransferModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => {setModalVisible(!modalVisible)}}
      >
        <ModalHeader>
        </ModalHeader>

      </Modal>
      // <TouchableScale
      //   activeScale={0.9}
      //   tension={18}
      //   friction={7}
      //   useNativeDriver={true}
      //   onPress={() => setModalVisible(true)}
      // >
      //   <TransferButton></TransferButton>
      // </TouchableScale>
  )
}