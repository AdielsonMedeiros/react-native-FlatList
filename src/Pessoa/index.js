import React from 'react';
import { View, Text, StyleSheet} from 'react-native'



function Pessoa(props){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textopessoa}>{props.data.nome}</Text>
        <Text style={styles.textopessoa}>{props.data.idade} anos</Text>
        <Text style={styles.textopessoa}>{props.data.email}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    areaPessoa:{

        backgroundColor: 'blue',
        height: 200,
        marginBottom: 15,
        justifyContent:'center',

      },
      textopessoa:{
        color: '#fff',
        fontSize: 20,

      }
  })

export default Pessoa;
