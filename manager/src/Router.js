import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" titleStyle={styles.navigationBarTitleStyle}>
                <Scene key="Login" component={LoginForm} title="Please Login" initial/>
                <Scene key="EmployeeList" component={EmployeeList} title="Employees"/>
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