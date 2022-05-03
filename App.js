import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as actions from './src/redux/actions/checkversion.action';
import { selectCheckversion } from './src/redux/selectors/checkversion.selector';


export default function App() {
  const dispatch = useDispatch();
  const { checkversion } = useSelector(selectCheckversion);

  console.log("selectCheckversion ", checkversion)


  useEffect(() => {
    console.log("useEffect ")
    dispatch(actions.checkversionDetails());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
