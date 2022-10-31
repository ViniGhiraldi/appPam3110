import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import estilos from './estilos';

import vascoWallpaper from '../../assets/vascoWallpaper.jpg'
import cruzMaltina from '../../assets/cruzMaltina.png'


export default function TelaHistoria (props) {
    return (
        <ImageBackground source={vascoWallpaper} style={estilos.container} blurRadius={3}>
            <Text style={estilos.titulo}>História do Vasco</Text>
            <Image source={cruzMaltina} style={estilos.img}/>
            <Text style={estilos.text}>A fundação do Vasco se deu no contexto de popularização da prática do remo no final do século XIX. O esporte foi paulatinamente se popularizando nas décadas finais do século, com a popularização das praias como locais recreativos e com o avanço de uma nova estética corporal, que valorizava um tipo físico condicionado e saudável.[1] Em 1873 foi criado o Club Guanabarense, dando impulso ao remo na cidade do Rio de Janeiro; vários clubes de remo foram fundados nos anos seguintes, e as regatas começaram a se tornar uma constante nas décadas de 1880 e 1890.</Text>

        </ImageBackground>
    )
  }

