import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBEAsqDWQ9KfjXX2tki3xaIchTGhxhkpL0",
    authDomain: "react-my-burger-9c1ab.firebaseapp.com",
    databaseURL: "https://react-my-burger-9c1ab.firebaseio.com",
    projectId: "react-my-burger-9c1ab",
    storageBucket: "react-my-burger-9c1ab.appspot.com",
    messagingSenderId: "614478310371",
    appId: "1:614478310371:web:459f718a18e70793274ed6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
