import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'My Spending',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold"}}>
            Hello World 
            {"\n"}
            {"\n"}
            Powered by React Native
            {"\n"}
            {"\n"}
            Magic 25.05.19 
            </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center'
  },
});