import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'mt-bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    Button: {
        marginTop: 20,
    },
    location: {
        fontFamily: 'mt-light',
        fontSize: 12,
        textAlign: 'left',
        marginTop: 20,
        color: '#474747'
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    anons: {
        fontFamily: 'mt-bold',
        fontSize: 16,
        textAlign: 'left',
        color: '#474747'
    },
    icon: {
        textAlign: 'center',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 5,
        padding: 20,
        marginTop: 15,

    }
})