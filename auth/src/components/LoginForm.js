import React, { Component } from 'react'
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    state = {
        text: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection />

                <CardSection>
                    <Button>
                        LogIn
                </Button>
                </CardSection>

            </Card>
        )
    }
}
