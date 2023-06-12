import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ded6c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewImg:{
        width: '43%',
        height: '25%',
    },
    logoImg:{
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#4d0000',
    },
    inputs: {
        padding: 10,
    },
    inputEmail: {
        height: 30,
        padding: 5,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSenha: {
        height: 30,
        padding: 5,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        marginBottom: 6,
    },
    inputSenhaNovamente: {
        height: 30,
        padding: 5,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
    },
    viewConfirmar:{
        padding: 5,
    },
    btnConfirmar:{
        height: 30,
        padding: 5,
        backgroundColor: 'black',
        borderRadius: 4,
    },
    txtBtnConfirmar:{
        color: 'white',
        fontWeight: 'bold',
    },
    viewLink:{
        flexDirection: 'row',
        padding: 5,
    },
    link:{
        color: 'black',
        padding: 5
    },
})

export default styles;