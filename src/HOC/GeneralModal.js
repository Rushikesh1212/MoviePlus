import React from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import {large} from '../constants/Theme/index.js';
export const GeneralModal = (props) => {
  const {
    children,
    showModal,
    toggleModal,
    containerStyle = {},
    ...rest
  } = props;

  return (
    <Modal
      visible={showModal}
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent={true}
      onDismiss={() => {
        toggleModal(false);
      }}
      onRequestClose={() => {
        toggleModal(false);
      }}
      {...rest}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => toggleModal(false)}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: `${large}%`,
          justifyContent: 'center',
          ...containerStyle,
        }}>
        {children}
      </TouchableOpacity>
    </Modal>
  );
};