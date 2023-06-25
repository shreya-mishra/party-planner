import React from 'react';
import {Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Authenticated = () => {
  return (
    <>
      <Text>You are Loggedin!</Text>
      <Button title="Signout" onPress={() => auth().signOut()} />
    </>
  );
};

export default Authenticated;