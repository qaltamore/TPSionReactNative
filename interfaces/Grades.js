import React from 'react'
import { View, Text } from 'react-native'
import { List, ListItem, Col } from 'native-base'

var grades = []

class Grades extends React.Component {
    constructor(props) {
        super(props)
        this.groupName = props.navigation.state.params.groupName
        if(this.groupName === "e5dwm11819") {
            grades = [{label: "Android", grade: "16"},{label: "React Native", grade: "20"},{label: "Docker", grade: "0"}]
        }
        if(this.groupName === "e4fi1718") {
            grades = [{label: "Javascript", grade: "20"},{label: "Symfony", grade: "16"},{label: "Architecture & Réseaux", grade: "11"}]
        }
    }

    static navigationOptions = {
        title: 'Mes Notes'
    }

    render() {
        return(
            <View>
                <List dataArray={grades} renderRow={(grade) =>
                    <ListItem>
                        <Col><Text>{grade.label}</Text></Col>
                        <Col><Text style={{ textAlign: 'right' }}>{grade.grade}</Text></Col>
                    </ListItem>
                }>
                </List>
            </View>
        )
    }
}

export default Grades