/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useState, type PropsWithChildren} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {Colors} from 'react-native/Libraries/NewAppScreen';
//  import Signup from './screens/Signup';
import Authenticated from './screens/Authenticated';
import PhoneNumber from './screens/PhoneNumber';
import OTPScreen from './screens/OTPScreen';
import auth from '@react-native-firebase/auth';
 
 const Section: React.FC<
   PropsWithChildren<{
     title: string;
   }>
 > = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
 
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
 
  //  return (
  //    <SafeAreaView style={backgroundStyle}>
  //      <StatusBar
  //        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //        backgroundColor={backgroundStyle.backgroundColor}
  //      />
  //      <Signup />

  //    </SafeAreaView>
  //  );

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  async function confirmOTP(code: any) {
    try {
      // @ts-expect-error
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      // @ts-expect-error
      alert('Invalid code');
    }
  }

  async function signIn(phoneNumber: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      // @ts-expect-error
      setConfirm(confirmation);
    } catch (error) {
      // @ts-expect-error
      alert(error);
    }
  }

  if (authenticated) return <Authenticated />;

  if (confirm) return <OTPScreen onSubmit={confirmOTP} />;

  return <PhoneNumber onSubmit={signIn} />;

};
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 