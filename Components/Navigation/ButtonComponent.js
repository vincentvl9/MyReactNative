import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'


const ButtonComponent = (props) => {
    return (
      <View style = {styles.myNav}>
        <Button title = "=" 
                style = {styles.myBtn}
        />
      </View>
    );
}

export default ButtonComponent;

const styles= StyleSheet.create({
    myNav: {
        flexDirection: 'row',
        marginTop: 39
    },
    myBtn: {
        backgroundColor: '#fff'
    }
});