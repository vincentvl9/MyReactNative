import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

const PresentationalComponent = (props) => {
    return (
      <View>
        <Text style = {styles.myState}>
          {props.myState}
        </Text>
      </View>
    );
}

export default PresentationalComponent;

const styles = StyleSheet.create({
    myState: {
      padding: 30,
      marginTop: 50,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth: 20,
      borderBottomWidth: 50,
      borderRadius: 100,
      borderColor: 'lightgrey',
      backgroundColor: 'darkgrey',
    }
});