import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors/Colors';
import {setUserType} from '../../redux/Actions';
import {connect} from 'react-redux';

const UserTypeSelectionScreen = ({navigation}) => {
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleUserTypeSelection = userType => {
    setUserType(userType)
    setSelectedUserType(userType);
    if (userType === 'Event Attendees') {
      navigation.navigate('UserForm');
    } else if (userType === 'Event Planner') {
      navigation.navigate('UserForm'); // event planner
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your User Type</Text>
      <TouchableOpacity
        style={
          selectedUserType === 'Event Attendees '
            ? styles.selectedButton
            : styles.button
        }
        onPress={() => handleUserTypeSelection('Event Attendees')}>
        <Text style={styles.buttonText}>Event Attendees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          selectedUserType === 'Event Planner'
            ? styles.selectedButton
            : styles.button
        }
        onPress={() => handleUserTypeSelection('Event Planner')}>
        <Text style={styles.buttonText}>Event Planner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.buttonTitle,
    fontSize: 16,
  },
});

const mapStateToProps = state => ({
  selectedUserType: state.userType, // Map the selectedUserType from Redux state
});

const mapDispatchToProps = {
  setUserType, // Map the setUserType action to props
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTypeSelectionScreen);
