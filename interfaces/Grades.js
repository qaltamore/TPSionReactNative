import React from 'react'
import { View, Text } from 'react-native'

class Grades extends React.Component {
    constructor(props) {
        super(props)
        this.groupName = props.navigation.state.params.groupName
        console.log(props.navigation.state.params.groupName)
    }

    static navigationOptions = {
        title: 'Mes Notes'
    }

    render() {
        return(
            <View><Text>Mes Notes</Text></View>
        )
    }
}

export default Grades