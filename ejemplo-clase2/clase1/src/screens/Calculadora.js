import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Boton from '../components/Boton';
import Input from '../components/Input';

export default function Calculadora({ route, navigation }) {
    //escribir codigo Js
    //State de la aplicación
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)
    //hacer que se sumen dos numeros
    const suma = () => {
        let result = (parseFloat(numero1) + parseFloat(numero2));
        setResultado(result);
    }
    const resta = () => {
        let result = (parseFloat(numero1) - parseFloat(numero2));
        setResultado(result);
    }
    const multi = () => {
        let result = (parseFloat(numero1) * parseFloat(numero2));
        setResultado(result);
    }
    const dividir = () => {
        let result = (parseFloat(numero1) / parseFloat(numero2));
        setResultado(result);
    }
    const limpiar = () => {
        setNumero1(0)
        setNumero2(0)
        setResultado(0)
    }
    const { itemId, otherParam } = route.params;
    const goTo = () => {
        // Navegar a DetailsScreen y pasar un parámetro
        navigation.navigate('ToDoList');
    };

    return (
        <View style={styles.container}>
            <Boton
                texto={'Volver'}
                funcion={goTo}
            />
            <Text>Numero 1: </Text>
            <Input
                textPlaceHolder={'Ingrese'}
                valorNumero={numero1.toString()}
                valorSetNumero={setNumero1}
            />
            <Text>Numero 2: </Text>
            <Input
                textPlaceHolder={'Ingrese'}
                valorNumero={numero2.toString()}
                valorSetNumero={setNumero2}
            />
            <Boton
                texto={'Suma'}
                funcion={suma}
            />
            <Boton
                texto={'Resta'}
                funcion={resta}
            />
            <Boton
                texto={'Multiplicar'}
                funcion={multi}
            />
            <Boton
                texto={'Dividir'}
                funcion={dividir}
            />

            <Text style={{ color: 'red', fontSize: 30 }}>Resultado: {resultado}</Text>
            <Boton
                texto={'Limpiar'}
                funcion={limpiar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});