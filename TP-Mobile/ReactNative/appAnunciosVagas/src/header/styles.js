import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3CB371',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '25%',
        borderBottomWidth: 10,
        borderBottomColor: '#eeeb'
    }, 
    titulo:{
        fontSize: 40,
        color: '#fff',
        letterSpacing: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 20,
    }, 
    subTitulo:{
        fontSize: 20,
        marginTop: 1,
        color: '#fff',
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export {styles}