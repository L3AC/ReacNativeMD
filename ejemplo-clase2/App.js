import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fechaReserva, setFechaReserva] = useState(new Date());
  const [clientes, setClientes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const findHighestId = () => {
    let highestId = 0;
    clientes.forEach((cliente) => {
      if (cliente.id > highestId) {
        highestId = cliente.id;
      }
    });
    return highestId;
  };
  

  const agregarCliente = () => {
    const nuevoCliente = {
      id: findHighestId() + 1, // Asigna el ID más alto encontrado más uno
      nombre: nombre,
      fechaReserva: fechaReserva,
      cantidad: cantidad,
    };
    setClientes([...clientes, nuevoCliente]);
    setNombre('');
    setFechaReserva(new Date());
    setCantidad('');
    setModalVisible(false);
  };
  

  const eliminarCliente = (id) => {
    // Elimina al cliente con el ID dado
    setClientes((prevClientes) =>
      prevClientes.filter((cliente) => cliente.id !== id)
    );
  };
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setFechaReserva(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar Cliente" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nombre del Cliente"
              value={nombre}
              onChangeText={setNombre}
            />
            <TouchableOpacity onPress={showDatepicker}>
              <Text>Seleccionar fecha de Reserva</Text>
            </TouchableOpacity>
            <Text>Seleccionada: {fechaReserva.toDateString()}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Cantidad"
              value={cantidad}
              onChangeText={setCantidad}
              keyboardType="numeric"
            />
            <Button title="Agregar Cliente" onPress={agregarCliente} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
      <FlatList
        data={clientes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.clienteItem}
          >
            <Text style={styles.clienteNombre}>ID: {item.id}</Text>
            <Text style={styles.clienteNombre}>Nombre: {item.nombre}</Text>
            <Text style={styles.clienteNombre}>Cantidad: {item.cantidad}</Text>
            <Text style={styles.clienteFecha}>
              Fecha de Reserva: {item.fechaReserva.toDateString()}
            </Text>
            <AntDesign
              name="close"
              size={24}
              color="black"
              style={{ position: 'absolute', right: 10, top: 10 }}
              onPress={() => eliminarCliente(item.id)}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  clienteItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 5,
    position: 'relative',
  },
  clienteNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clienteFecha: {
    fontSize: 16,
  },
});

export default App;
