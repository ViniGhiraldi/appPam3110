import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import estilos from './estilos';

import alex from '../../assets/jogadores/alex.png'
import andrey from '../../assets/jogadores/andrey.png'
import raniel from '../../assets/jogadores/ranieljpg.jpg'


export default function TelaJogadores (props) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Jogadores</Text>
            <View style={estilos.card}>
                <Image source={alex} style={estilos.img}/>
                <Text>Alex Teixeira</Text>
            </View>
            <View style={estilos.card}>
                <Image source={andrey} style={estilos.img}/>
                <Text>Andrey</Text>
            </View>
            <View style={estilos.card}>
                <Image source={raniel} style={estilos.img}/>
                <Text>Raniel</Text>
            </View>
            <View style={estilos.card}>
                <Image source={alex} style={estilos.img}/>
                <Text>Alex Teixeira</Text>
            </View>
            <View style={estilos.card}>
                <Image source={alex} style={estilos.img}/>
                <Text>Alex Teixeira</Text>
            </View>
        </View>
    )
  }

