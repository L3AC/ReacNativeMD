/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('usu', username);
    formData.append('clave', password);

    try {
      const response = await axios.post('http://192.168.137.1:80//YNWA/api/services/public/cliente.php?action=logIn', formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      // Resto del código
    } catch (error) {
      console.log(error);
    }
    
    
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;*/
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('usu', username);
      formData.append('clave', password);
  
      const response = await fetch('http://192.168.137.1:80//YNWA/api/services/public/cliente.php?action=logIn&app=j', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
  
      const text = await response.text();
      const responseData = JSON.parse(text);
      console.log('WA34 '+responseData);
  
      if (response.ok) {
        if (responseData.status === 1) {
          Alert.alert('Bien');
        } else {
          Alert.alert('No coincide');
        }
      } else {
        Alert.alert('Login failed', 'Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      console.error(text);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

export default App;
