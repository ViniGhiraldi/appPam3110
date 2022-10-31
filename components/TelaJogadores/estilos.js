import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        textAlign: 'center'
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
        margin:20
    },
    img:{
        width: '100%',
        height: '90%'
    },
    card:{
        width: 150,
        height:200,
        borderColor: 'black',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        marginVertical:20
    }
  });

  export default estilos;