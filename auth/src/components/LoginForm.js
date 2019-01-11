import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    onButtonPress = () => {
        const { email, password } = this.state;
        console.log(email);
        console.log(password);

        this.setState({
            error: ''
        });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {

                    })
                    .catch(() => {
                        this.setState({ error: 'Authentication Field.' })
                    })
            })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        LogIn
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
