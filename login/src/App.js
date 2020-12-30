import React, { Component } from "react"
import "./App.css";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyAhb6JsLpJ0I5iDwM2fWkfKG--2J3RVMKc",
  authDomain: "my-second-firebase-auth.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div className="loggedin">Signed In!</div>
            <button className="signout" onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          {firebase.auth().currentUser.photoURL ? (
            <img className="profilepic" alt="profile picture" src={firebase.auth().currentUser.photoURL}></img>
          ) : (<></>)}
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default App
