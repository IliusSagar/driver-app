import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';

const API_URL = 'http://127.0.0.1:8000/api/register';  // Update with your API

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        console.log('Register button clicked');
        if (name === '' || email === '' || password === '') {
            Alert.alert('Error', 'Please fill all fields');
        } else {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                    }),
                });

                console.log('Response:', response);
                const data = await response.json();

                if (response.ok) {
                    Alert.alert('Registration Successful', `Welcome ${data.user.name}`);
                    navigation.navigate('Login');  // Navigate to login after registration
                } else {
                    Alert.alert('Registration Failed', data.message || 'Something went wrong');
                }
            } catch (error) {
                Alert.alert('Error', 'Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.loginButtonText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    loginButton: {
        marginTop: 20,
    },
    loginButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
};
