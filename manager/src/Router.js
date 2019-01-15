import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" titleStyle={styles.navigationBarTitleStyle}>
                <Scene key="Login" component={LoginForm} title="Please Login" initial={true} />
            </Scene>
        </Router>
    )
}

const styles = {
    navigationBarTitleStyle: {
        // centering for Android
        flex: 1,
        textAlign: 'center'
    }
}



export default RouterComponent;