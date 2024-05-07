import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList,Modal  } from 'react-native';
import Boton from '../components/Boton';

export default function ToDoList({ navigation,route }) {

    const goTo = () => {
        // Navegar a DetailsScreen y pasar un parámetro
        navigation.navigate('Calculadora', { itemId: 1, otherParam: 'Ejemplo' });
      };

    const [tasks, setTasks] = useState([
      { id: '1', title: 'Task 1' },
      { id: '2', title: 'Task 2' },
      // Agrega más tareas según sea necesario
    ]);
    
    const [taskText, setTaskText] = useState('');
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedTask, setEditedTask] = useState(null);
    const [editedTaskText, setEditedTaskText] = useState('');
    const [searchText, setSearchText] = useState('');
  
    const addTask = () => {
      if (taskText.trim() !== '') {
        setTasks([...tasks, { id: String(tasks.length + 1), title: taskText }]);
        setTaskText('');
      }
    };
  
    const deleteTask = taskId => {
      setTasks(tasks.filter(task => task.id !== taskId));
    };
  
    const editTask = () => {
      setTasks(tasks.map(task => (task.id === editedTask ? { ...task, title: editedTaskText } : task)));
      setEditModalVisible(false);
    };
  
    const openEditModal = taskId => {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        setEditedTask(taskId);
        setEditedTaskText(task.title);
        setEditModalVisible(true);
      }
    };
  
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Button title="Ir" onPress={goTo} />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
          onChangeText={text => setTaskText(text)}
          value={taskText}
          placeholder="Agrega"
        />
        <Boton texto="Agregar" funcion={addTask} />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholder="Search tasks"
        />
        <FlatList
          data={tasks.filter(task => task.title.toLowerCase().includes(searchText.toLowerCase()))}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text>{item.title}</Text>
              <Button title="Edit" onPress={() => openEditModal(item.id)} />
              <Button title="Delete" onPress={() => deleteTask(item.id)} />
            </View>
          )}
        />
        <Modal visible={editModalVisible} animationType="slide">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
              onChangeText={text => setEditedTaskText(text)}
              value={editedTaskText}
              placeholder="Edit task"
            />
            <Button title="Save" onPress={editTask} />
            <Button title="Cancel" onPress={() => setEditModalVisible(false)} />
          </View>
        </Modal>
      </View>
    );
  }