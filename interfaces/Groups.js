import React from 'react'
import { View, Text } from 'react-native'
import { List, ListItem } from 'native-base'

const groups = [
    { title: "E5 DWM1 1819", name: "e5dwm11819" },
    { title: "E4 FI 1718", name: "e4fi1718" }
  ];

class Groups extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View>
                <List dataArray={groups} renderRow={(group) =>
                    <ListItem onPress={() => this.props.navigation.navigate('Grades', {
                        groupName: group.name
                    })}>
                        <Text>{group.title}</Text>
                    </ListItem>
                }>
                </List>
            </View>
        )
    }
}

export default Groups