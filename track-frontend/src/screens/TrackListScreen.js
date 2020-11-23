import React, {useContext} from 'react'
import { Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import {ListItem} from 'react-native-elements';

export default function TrackListScreen({navigation}) {
    const {state, fetchTracks} = useContext(TrackContext);
    console.log(state);
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
             <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={() => 
                        navigation.navigate('TrackDetail', {_id: item._id})
                    }>
                        <ListItem chevron title={item.name} />
                    </TouchableOpacity>
                }}
            />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({
    // style
})
