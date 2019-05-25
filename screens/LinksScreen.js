import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TextInput } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    const date = new Date()
    return (
        <View style={styles.container}>
            <View style={styles.cardRow}>
                <Text>Price</Text>
                <TextInput style = {{backgroundColor : 'blue'}} placeholder='Amount' keyboardType='numeric' />
            </View>
            <View style={styles.cardRow}>
                <TextInput style = {{backgroundColor : 'red', flex:1}} placeholder='Description'/>
            </View>
            <View style={styles.cardDate}>
              <Text>{date.toLocaleDateString()}</Text>
            </View>
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  cardDate: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f5f5f5'
  },
  contentContainer: {
    //  alignItems: 'center'
    },
    cardRow: {
      padding: 10,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },		
});
