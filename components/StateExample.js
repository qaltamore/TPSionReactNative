import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

class StateExample extends Component {
    constructor(props) {
        super(props)
        //le this dans la fonction fera appel au this du constructeur. Si on ne fait pas ça, c'est la this de la fonction
        this.onPress = this.onPress.bind(this) 
        this.evol = 0
        this.name = 'Lixy'
        this.state = {
            url: 'https://www.pokepedia.fr/images/thumb/2/23/Lixy-DP.png/250px-Lixy-DP.png'
        }
    }

    onPress() {
        if(this.evol == 0) {
            this.setState({ url : 'https://www.pokepedia.fr/images/thumb/b/b6/Luxio-DP.png/250px-Luxio-DP.png' })
            this.evol = 1
            this.name = 'Luxio'
        }
        else if(this.evol == 1) {
            this.setState({ url : 'https://www.pokepedia.fr/images/thumb/a/ae/Luxray-DP.png/250px-Luxray-DP.png' })
            this.evol = 2
            this.name = 'Luxray'
        }
        else {
            this.setState({ url : 'https://www.pokepedia.fr/images/thumb/2/23/Lixy-DP.png/250px-Lixy-DP.png' })
            this.evol = 0
            this.name = 'Lixy'
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.pokemonName}>{ this.name }</Text>
                <Image style={{ width: 340, height: 308, marginBottom: 20 }} source={{ uri : this.state.url }} />
                <Button title="CLIQUE ENCULE !" onPress={this.onPress} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pokemonName: {
        fontSize: 50
    }
})

export default StateExample