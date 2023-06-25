import React, {useState} from 'react';
import {TextInput, Button} from 'react-native';

const OTPScreen = ({onSubmit}) => {
  const [code, setCode] = useState();
  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => onSubmit(code)} />
    </>
  );
};

export default OTPScreen;