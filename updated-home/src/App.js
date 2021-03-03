import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import image from "./assets/logo.png";

firebase.initializeApp({
  apiKey: "AIzaSyAhb6JsLpJ0I5iDwM2fWkfKG--2J3RVMKc",
  authDomain: "my-second-firebase-auth.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <button
              className="signout btn btn-primary"
              onClick={() => firebase.auth().signOut()}
            >
              Sign out
            </button>
            <h1 className="d-flex justify-content-center p-3">
              Welcome, {firebase.auth().currentUser.displayName}!
            </h1>
          </span>
        ) : (
          <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target=".dual-nav"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link pl-0" href="#">
                        Home
                      </a>
                    </li>
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Explore
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="https://akkiseven.github.io/akkimarker"
                        target="blank"
                      >
                        AkkiMarker
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://akkiseven.github.io/photoeditor"
                        target="blank"
                      >
                        PhotoEditor(CoEdit)
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://akkiseven.github.io/typinggame"
                        target="blank"
                      >
                        Typing Game
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://github.com/akkiseven/akkiseven.github.io"
                        target="blank"
                      >
                        More Projects
                      </a>
                    </div>
                  </ul>
                </div>
                <a
                  href="/"
                  className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25"
                ></a>
                <div className="navbar-collapse collapse dual-nav w-50 order-2">
                  <ul className="nav navbar-nav ml-auto"></ul>
                </div>
              </div>
              <div id="google_translate_element"></div>
            </nav>

            <br></br>
            <br></br>
            <h1 className="d-flex justify-content-center p-3">
              Welcome to AkkiSeven!
            </h1>

            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top logoakkiseven"
                src={image}
                alt="AkkiSeven Logo"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                <p className="card-text">
                  Welcome to AkkiSeven!
                  <br></br>
                  <br></br>
                  Sign in with any of the links below, to get started, or,
                  <br></br>
                  if you don't want to sign up,
                  <br></br>
                  just sign up anonymously!
                </p>
                <hr></hr>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </div>
            <br></br>
            <h2 className="d-flex justify-content-center p-3">
              What is AkkiSeven?
            </h2>
            <p className="d-flex justify-content-center p-3">
              Scroll down to find out!
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <section>
              <h1 className="d-flex justify-content-center p-3">AkkiSeven</h1>
              <p className="d-flex justify-content-center p-3">
                Here,
                <br></br>
                you can find all the projects I created, plus,
                <br></br>
                you get the source code for all the projects for free.
                <br></br>
                Signup, it is free, and get more control over the projects.{" "}
              </p>
            </section>
          </header>
        )}
      </div>
    );
  }
}

export default App;
