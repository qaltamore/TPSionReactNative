import React from 'react'
import { StyleSheet, Image } from 'react-native'

//const ProfilePhoto = ({size}) => { -> alert(size)
const ProfilePhoto = (props) => {

    const styles = StyleSheet.create({
        imgStyle: {
            width: props.width,
            height: props.height
        }
    })
    
    return (
        <Image 
            style={styles.imgStyle} 
            source={{ uri: props.url }} />
    )
}

export default ProfilePhoto