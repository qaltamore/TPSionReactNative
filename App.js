import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
/*import ProfilePhoto from './components/ProfilePhoto'
import StateExample from './components/StateExample'*/
import AppStackNavigator from './navigation/AppStackNavigator'
import { Root } from 'native-base';
import { createAppContainer } from 'react-navigation'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }
    this.loadFonts()
  }

  async loadFonts() {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf')
      })
  
      this.setState({ fontsLoaded: true })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    /*let platform = "unknow"
    platform = Platform.OS == 'ios' ? 'iOs' : 'Android'*/
    const AppContainer = createAppContainer(AppStackNavigator);

    if(this.state.fontsLoaded) {
      return (
        <Root>
          <AppContainer />
        </Root>
      )
    } else {
      return <View><Text>Loading...</Text></View>
    }
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify'
  },
  text: {
    color: '#00CED1',
    fontSize: 50
  }
});*/


/*<View style={styles.container}>
  <Text>Device : {platform}</Text>
  <StateExample />
  <Text style={styles.text}>LOOK AT THAT WONDERFULL SEAL OMG !</Text>
  <ProfilePhoto width={200} height={70} url={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg/290px-B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg"} />
  <ProfilePhoto width={300} height={150} url={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg/290px-B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg"} />
  <ProfilePhoto width={400} height={200} url={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg/290px-B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg"} />
</View>*/