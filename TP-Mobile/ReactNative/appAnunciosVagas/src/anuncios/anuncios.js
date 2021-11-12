import React, {Component} from 'react'
import { View, FlatList } from 'react-native'
import {styles} from '../anuncios/styles'

import Vagas from '../vagas/vagas'

export default class Anuncios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vagas:[
                {
                    id: 1, vaga: 'Tecnico instalador', salario: 1650.00,
                    dsVaga: 'Sera responsavel pelo atendimento e instalacao ao cliente',
                    contato: '(13) 98182-5016 E-mail: rh@nauticatelecom.com.br'
                },
                {
                    id: 2, vaga: 'Analista de Monitoramento NOC', salario: 2900.00,
                    dsVaga: 'Será responsavel pelo monitoramento de equipamento e servicos',
                    contato: '(13) 98182-5016 E-mail: rh@nauticatelecom.com.br'
                },
                {
                    id: 3, vaga: 'Tecnico de Redes', salario: 3600.50,
                    dsVaga: 'Sera responsavel pela configuracao e funcionamento da rede.',
                    contato: '(13) 98182-5016 E-mail: rh@nauticatelecom.com.br'
                },
                {
                    id: 4, vaga: 'Engenheiro de Telecomunicacoes', salario: 5400.00,
                    dsVaga: 'Sera responsavel pelo projeto e contrucao da rede cabeada',
                    contato: '(13) 98182-5016 E-mail: rh@nauticatelecom.com.br'
                },
                {
                    id: 5, vaga: 'Suporte tecnico nivel 1', salario: 1900.00,
                    dsVaga: 'Sera responsavel pelo suporte ao cliente nivel 1',
                    contato: '(13) 98182-5016 E-mail: rh@nauticatelecom.com.br'
                },
                {
                    id: 6, vaga: 'Suporte tecnico nivel 2', salario: 2100.00,
                    dsVaga: 'Sera responsavel pelo suporte ao cliente nivel 2',
                    contato: '(13) 98182-5016 E-mail: rh@nauticatelecom.com.br'
                }
            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={this.state.vagas}
                vertical={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <Vagas data={item} />}
                />
            </View>
        )
    }
}
