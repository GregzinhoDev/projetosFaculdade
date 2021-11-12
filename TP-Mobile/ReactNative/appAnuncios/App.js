import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios:[
        {id: 1, nome: 'Barra Axial', preco: 79.90, tipo: 'Acessorios de PC', source:require('./assets/anuncio1.jpg')},
        {id: 2, nome: 'Bomba DAgua', preco: 139.90, tipo: 'Acessorios de PC', source:require('./assets/anuncio2.jpg')},
        {id: 3, nome: 'Correia Dentada', preco: 89.90, tipo: 'Itens de Escritório', source:require('./assets/anuncio3.jpg')},
        {id: 4, nome: 'Rolamento de Roda', preco: 119.90, tipo: 'Videogame', source:require('./assets/anuncio4.jpg')},
        {id: 5, nome: 'Filtro de Oleo', preco: 26.90, tipo: 'Monitores e TVs', source:require('./assets/anuncio5.jpg')},
        {id: 6, nome: 'Bandeja', preco: 249.90, tipo: 'Audios e video', source:require('./assets/anuncio6.jpg')},
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>Car Shop</Text>
          <Text style={styles.textoPessoa}>Ofertas</Text>
        </View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={this.state.anuncios}
        keyExtractor = {(item) => item.id}
        renderItem = {({item})=> <Anuncio data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaHeader:{
    backgroundColor: '#569',
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader:{
    fontSize: 46,
    color: '#eee',
    marginTop: 20,
    letterSpacing: 5, 
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  areaPessoa:{
    backgroundColor: '#eee',
    width: 250,
    height: 290,
    marginTop: 50,
    marginLeft: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoPessoa:{
    color: '#222',
    fontSize: 22,
  },
  textoPreco:{
    fontSize: 35,
    color: '#f00',
    fontWeight: 'bold',
  },
  imgAnuncio:{
    marginTop: 4,
    width: 160,
    height: 150,
    overflow: 'hidden',
  },
})

export default App;

class Anuncio extends Component {
  render() {
    return(
      <View style={styles.areaPessoa}>
        <Image style={styles.imgAnuncio} source={this.props.data.source}/>
        <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
        <Text style={styles.textoPreco}>{this.props.data.preco.toFixed(2)}</Text>
      </View>
    )
  }
}