import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { Style } from '../styles/style';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Home({ navigation }) {

    const [news, setNews] = useState([
        {
            name: 'UK', anons: 'Travel lists to be updated - find out which countries may go red',
            text: `The UK's travel lists are set to be updated later, with European countries considered mostly safe from being added to the red list.`, key: '1',
            img: 'https://e3.365dm.com/21/08/1600x900/skynews-plane-sun-travel_5489903.jpg?bypass-service-worker&20210825164616'
        },
        {
            name: 'World', anons: `'You will regret this': Japan crime boss's chilling threat to judge after being sentenced to death`,
            text: 'Satoru Nomura, the 74-year-old head of the Kudo-kai yakuza group which has some 220 active members, denied accusations he masterminded the grisly crimes.', key: '2',
            img: 'https://e3.365dm.com/21/08/1600x900/skynews-yakuza-satoru-nomura_5490293.jpg?bypass-service-worker&20210826034224'
        },
    ]);

    const [modalWindow, setModalWindow] = useState(false)
    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString(36).substring(7);
            return [article, ...list]
        })
        setModalWindow(false);
    }
    return (
        <View style={Style.main}>
            <Modal visible={modalWindow} >
                <View style={Style.main}>
                    <Ionicons name="md-close-circle-outline" size={30} color="red" style={Style.icon} onPress={() => setModalWindow(false)} />
                    <Text style={Style.anons}>Create News</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <AntDesign name="pluscircleo" size={30} color="black" style={Style.icon} onPress={() => setModalWindow(true)} />
            <Text style={Style.title}>News list</Text>
            <FlatList data={news} renderItem={({ item }) => (
                <TouchableOpacity style={Style.item} onPress={() => { navigation.navigate('Contact', item) }} >
                    <Image style={Style.image} source={{ uri: item.img }} />
                    <Text style={Style.location} >{item.name}</Text>
                    <Text style={Style.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )} />


        </View>
    );
}
