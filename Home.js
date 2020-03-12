import React, { Component } from 'react'
import PresentationalComponent from './Components/Home/PresentationalComponent'
import { Text, View } from 'react-native'

export default class Home extends Component {

    state = {
        myState: 'Welkom Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      updateState = () => this.setState({ myState: 'Of toch niet? :)' })

  render() {
    return (
      <View>
        <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
      </View>
    );
  }
}
