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
            <button className="signout" onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h1>Thanks for signing in, {firebase.auth().currentUser.displayName}!</h1>
          <button class="download" download>Download Akki-Minecraft for Mac!</button>
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
          <h1>It is required to sign in for downloading Akki-Minecraft.</h1>
      </div>
    )
  }
}

export default App
