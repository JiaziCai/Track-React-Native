import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';

export default function AccountScreen() {
    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={styles.styleText}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     styleText: {
         fontSize: 48
     }
})
