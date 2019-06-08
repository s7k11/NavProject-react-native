import React from 'react';
import { View, Text,Button,Alert,TextInput } from 'react-native';



export default class HomeScreen extends React.Component {
    state = {
        username: ''
    }


    AddData() {

        if(this.state.username!='')
        {
        fetch('http://192.168.43.180:4000/users/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username
            }),
        });
        this.setState({
            username:''
        })
    }
        if(this.state.username=''){
            Alert.alert(`Enter data first`)
        }
    }



    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Text>
                    Input New Values:
                </Text>
                <TextInput
                    style={{ backgroundColor: "#f2f2f2" }}
                    onChangeText={(username) => this.setState({ username })}
                />
                <Button
                    title="click me to send data"
                    onPress={() => { this.AddData() }}
                />
                <Text>
                    {this.state.username}
                </Text>
          <Button
            title="Check added data"
            onPress={() => this.props.navigation.navigate('Details')}
          />

        </View>
      );
    }
  }


  


