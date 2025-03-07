import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddCard = ({ onAddCard }: { onAddCard: (newCard: any) => void }) => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [imagen, setImagen] = useState('');

    const handleAddCard = () => {
        if (!titulo.trim() || !contenido.trim()) return;

        const newCard = {
            titulo,
            contenido,
            source: imagen || 'https://via.placeholder.com/150', // Imagen por defecto si no ingresan una
            date: undefined, // Se puede agregar fecha si se necesita
            isExpanded: true, // La nueva tarjeta se abre automáticamente
        };

        onAddCard(newCard);
        setTitulo('');
        setContenido('');
        setImagen('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Contenido"
                value={contenido}
                onChangeText={setContenido}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="URL de Imagen (opcional)"
                value={imagen}
                onChangeText={setImagen}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddCard}>
                <MaterialIcons name="add-circle-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Agregar Tarjeta</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    textArea: {
        height: 60,
        textAlignVertical: 'top',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default AddCard;
