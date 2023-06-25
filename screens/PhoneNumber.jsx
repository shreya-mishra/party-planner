import React, {useState} from 'react';
import { TextInput, Button } from 'react-native';


const PhoneNumber = ({onSubmit}) => {
  const [number, setNumber] = useState();
  return (
    <>
      <TextInput value={number} onChangeText={text => setNumber(text)} />
      <Button
        title="Phone Number Sign In"
        onPress={() => onSubmit(number)}
      />
    </>
  );
};

export default PhoneNumber;