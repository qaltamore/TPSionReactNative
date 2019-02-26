import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../interfaces/Home'
import Planning from '../interfaces/Planning'
import Groups from '../interfaces/Groups'
import Grades from '../interfaces/Grades'

const AppStackNavigator = createStackNavigator({
    Home,
    Planning,
    Groups,
    Grades
}, {
    initialRouteName: 'Home'
})

export default AppStackNavigator