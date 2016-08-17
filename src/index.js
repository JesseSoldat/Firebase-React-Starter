import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
	authDomain: "reactfire-709f3.firebaseapp.com",
	databaseURL: "https://reactfire-709f3.firebaseio.com",
	storageBucket: "reactfire-709f3.appspot.com",
};
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
