import React, { Component } from 'react';
import Router from './routes';
import './App.css';
import Navbar from "./components/navbar/Navbar"
// import { getAllDB } from './utils/testgetdb';
import { store } from './store/configureStore';
import { syncsDatabase } from './utils/getDatabase';
import Spinner from './components/UI/spinner/Spinner';

interface IState {
  isLoading: boolean
}

class App extends Component<{}, IState> {

  state = {
    isLoading: true
  }

  async componentDidMount() {
    this.setDatabaseToRedux()
  }

  setDatabaseToRedux = async () => {
    try {
      // await getAllDB(store.dispatch)
      await syncsDatabase(store.dispatch)
      this.setState({ isLoading: false })

    } catch (error) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        {this.state.isLoading ? <Spinner isLoading={this.state.isLoading} /> : <Router />}
      </div >
    );
  }
}

export default App;
