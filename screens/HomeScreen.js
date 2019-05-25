import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform
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
        <View style={styles.tabBarInfoContainer}>
          <Text style={{fontWeight: 'bold'}}>Total</Text>
          <Text style={{fontWeight: 'bold'}}>RM 10</Text>
        </View>
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

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});