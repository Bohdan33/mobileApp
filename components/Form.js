import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { Style } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
    return (
        <View style={Style.main}>
            <Formik initialValues={{ name: '', anons: '', text: '', img: '' }}
                onSubmit={(values, clearForm) => { addArticle(values); clearForm.resetForm() }}>
                {(props) => (
                    <View>
                        <TextInput style={Style.input} value={props.values.name} placeholder='Enter location' onChangeText={props.handleChange('name')} />
                        <TextInput style={Style.input} value={props.values.anons} placeholder='Enter preview' onChangeText={props.handleChange('anons')} multiline />
                        <TextInput style={Style.input} value={props.values.text} placeholder='Enter full text' onChangeText={props.handleChange('text')} multiline />
                        <TextInput style={Style.input} value={props.values.img} placeholder='Enter image url' onChangeText={props.handleChange('img')} />
                        <View style={Style.Button}><Button title='Add News' onPress={props.handleSubmit} /></View>
                    </View>
                )}
            </Formik>
        </View>
    );
}
