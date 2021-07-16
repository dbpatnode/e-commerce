import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homepage/homepage.jsx'
import ShopPage from '../src/pages/shop/shop.jsx'
import LoginAndSignupPage from '../src/pages/login-and-signup-page/login-and-signup-page.jsx'
import Header from '../src/components/header/header.jsx'
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  
  state = {
    currentUser: null
  }
  // firebase fun!!
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          const createdAt = new Date();
          // console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              
              displayName: snapShot.data().displayName,
              email: snapShot.data().email, 
              createdAt: createdAt, 

            }
          }, () => {
            console.log(this.state)
          })
        });

      } else {
        this.setState({ currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch> 
        <Route exact path='/' component={HomePage}/> 
        <Route path='/shop' component={ShopPage}/> 
        <Route path='/signin' component={LoginAndSignupPage}/> 
      </Switch>
      
    </div>
  );
  }
}

export default App;
