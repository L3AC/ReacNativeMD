
import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, StyleSheet} from 'react-native';

export default function Input({
textPlaceHolder, 
valorNumero, 
valorSetNumero
}){

    return(
        <TextInput
        style={styles.Input}
        placeholder={textPlaceHolder}
        keyboardType='number-pad' 
        value={valorNumero}
        onChangeText={valorSetNumero}/>
    )

}

const styles = StyleSheet.create({

    Input:{
      backgroundColor: 'lightgrey', 
      width:150, 
      padding:15,
      color:'black', 
      margin:10
    }
  });
