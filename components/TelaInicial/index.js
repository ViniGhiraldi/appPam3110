import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import estilos from './estilos';

import vascoLogo from '../../assets/vascoLogo.png';
import historiaIcon from '../../assets/historiaIcon.png';
import jogadorIcone from '../../assets/jogadorIcone.png';
import calendarioIcone from '../../assets/calendarioIcone.png';

export default function TelaInicial (props) {
    return (
      <View style={ estilos.container }>
        <Image source={ vascoLogo } style={ estilos.img } />
        <Text style={ estilos.titulo }>Vasco</Text>
        <Text style={ estilos.descricao }>A história do Club de Regatas Vasco da Gama começa no ano de 1898, ano de sua fundação na cidade do Rio de Janeiro.</Text>
  
        <Pressable
          onPress={ () => { props.navigation.navigate("Historia") } }
          style={estilos.card}
        >
          <Image source={ historiaIcon } style={ estilos.cardImg } />
          <Text style={ estilos.cardTexto}>Conheça nossa história</Text>
        </Pressable>
  
        <Pressable
          onPress={ () => { props.navigation.navigate("Jogadores") } }
          style={estilos.card}
        >
          <Image source={ jogadorIcone } style={ estilos.cardImg } />
          <Text style={ estilos.cardTexto}>Conheça os jogadores</Text>
        </Pressable>
  
        <Pressable
          //onPress={ () => { props.navigation.navigate("Nuvem") } }
          style={estilos.card}
        >
          <Image source={ calendarioIcone } style={ estilos.cardImg } />
          <Text style={ estilos.cardTexto}>Conheça o calendário</Text>
        </Pressable>
      </View>
    )
  }

