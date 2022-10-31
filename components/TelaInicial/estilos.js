import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width:100,
      height:130
    },
    cardImg:{
      width:65,
      height:70,
    },
    titulo:{
      fontSize:20
    },
    descricao:{
      fontSize:10,
      width:250
    },
    card:{
      width:200,
      height:100,
      marginVertical: 10,
      borderWidth:2,
      bordercolor:'black',
      borderRadius:15,
      padding:10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    cardTexto:{
      color: 'black',
      fontSize: 12,
      marginLeft: 15
    }
  });

  export default estilos;