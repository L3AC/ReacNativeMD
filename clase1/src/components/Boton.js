import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Boton({texto, funcion, colorEnviado}){

    return(
        <TouchableOpacity
        style={styles.btn}
        onPress={funcion}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
      backgroundColor:'blue',
      padding:15,
      width:250, marginBottom:5,
    }, 
    text:{
      textAlign:'center', 
      fontWeight:'900'
    }
  });