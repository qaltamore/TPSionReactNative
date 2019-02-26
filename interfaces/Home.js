import React from 'react'
import { Container, Header, Content, Footer, Left, Right, Body, Title, FooterTab, Button, Icon } from 'native-base';
import { Text, StyleSheet, StatusBar } from 'react-native'
import Planning from './Planning';
import Groups from './Groups';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.state = {
            view: 'planning'
        }
    }

    static navigationOptions = {
        title: "Mon Planning"
    }

    toggleView(view) {
        this.setState({ view })
    }

    render() {
        let currentView = (this.state.view === 'planning') ? <Planning /> : <Groups navigation={this.props.navigation} />
        return(
            <Container>
                <Content>
                    {currentView}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.toggleView('planning')}>
                            <Icon name='calendar' />
                            <Text style={styles.whiteColor}>Mon Planning</Text>
                        </Button>

                        <Button onPress={() => this.toggleView('groups')}>
                            <Icon name='star-half' />
                            <Text style={styles.whiteColor}>Mes Notes</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    whiteColor: {
        color: 'white'
    }
})

export default Home