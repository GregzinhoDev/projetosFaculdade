import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        flex: 1,
        alignItems: 'center',
    },
    areaHeader:{
        width: '100%',
        height: '15%',
        backgroundColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12
    },
    textHeader:{
        fontSize: 25,
        marginTop: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 3,
        color: '#8B4513'
    },
    img:{
        width: 250,
        height: 250,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDesafio:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8B4513',
        textAlign: 'center',
        padding: 15,
    },
    areaRandom:{
        marginTop: 20 ,
        backgroundColor: "#0f0",
        width: 160,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#8B4513',
        marginBottom: 20,
    },
    textRandom:{
        fontSize: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8B4513',
    },
    button:{
        marginTop: 20,
        backgroundColor: '#8B4513',
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})

export {styles}