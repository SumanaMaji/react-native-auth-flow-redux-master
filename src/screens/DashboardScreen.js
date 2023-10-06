import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectEmail, selectUserName, setSignOut } from '../redux/slices/authSlice';
import getAllData from '../redux/slices/tripSlice';
import AccountScreen from '../screens/AccountScreen';

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const datas = useSelector((state) => {
        console.log('state...', state.DashboardScreen);
    });
    const myAccount = () => {
        <AccountScreen />
    }
 
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
              <TouchableOpacity onPress={myAccount} style={styles.btn}>
                <Text style={styles.text}>My Account</Text>
            </TouchableOpacity>
            <Button
  onPress={() => dispatch(getAllData())}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            <Text>
                Wellcome to Dashboard, {username}
            </Text>
            <TouchableOpacity
                style={{ backgroundColor: 'red', paddingHorizontal: 50, paddingVertical: 15, margin: 10 }}
                onPress={() => dispatch(setSignOut())}
            >
                <Text style={{ color: 'white' }}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
   
    btn: {
        backgroundColor: 'pink',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    },
})

