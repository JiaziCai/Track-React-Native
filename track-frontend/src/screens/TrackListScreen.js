import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function TrackListScreen({navigation}) {
    return (
        <>
            <Text>TrackListScreen</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
        </>
    )
}

const styles = StyleSheet.create({
    // style
})
