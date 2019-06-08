import React from 'react';
import { View, Text,Button,FlatList } from 'react-native';


export default class DetailsScreen extends React.Component {
    state ={
        users: []
    }

    componentDidMount() {
        fetch('http://192.168.43.180:4000/users')
        .then(res => res.json ())
        .then(users => this.setState({
            users
        }))
    }


    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text> GET Value: </Text>
                <FlatList
                data = {this.state.users}
                keyExtractor ={(item,index)=>index.toString()}// this is for removing unique key warning
                renderItem= { ({item})=>    
                <View>
                    <Text> {item.username}</Text>
                </View>
            }
                />
          <Button
            title="Reload Page"
            onPress={() => this.props.navigation.push('Details')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }