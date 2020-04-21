import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal'
import {Container} from 'reactstrap';
import { loadUser } from './actions/authActions';

class App extends  Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
      <div className="App">
       <AppNavbar/>
       <Container>
          <ItemModal/>
          <ShoppingList/>
       </Container>
       
      </div>
      </Provider>
    );
  }
  
}

export default App;
