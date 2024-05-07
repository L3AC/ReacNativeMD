import React from 'react';
import { View, Text ,Button} from 'react-native';

export default function DetailsScreen({ route,navigation  }) {
  const { itemId, otherParam } = route.params;
  const goTo = () => {
    // Navegar a DetailsScreen y pasar un parámetro
    navigation.navigate('ToDoList', { itemId: 2, otherParam: 'Ejemplo2' });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ir" onPress={goTo} />
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
}
