import React, { Component } from 'react';
import Router from './routes';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import DotLoader from "react-spinners/DotLoader";
// import { synceDatabase } from './utils/testgetdb';
import { store } from './store/configureStore';

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
      // await synceDatabase(store.dispatch)
      this.setState({ isLoading: false })

    } catch (error) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        {this.state.isLoading ? <div className='spannerWrapper'><DotLoader color="#ffa81f" loading={this.state.isLoading} size={60} /></div> : <Router />}
      </div >
    );
  }
}

export default App;
