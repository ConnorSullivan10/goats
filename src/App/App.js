import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
          <button className="btn btn-success">Goats On Goats</button>
          <GoatCoral goats={this.state.goats} freeGoat={this.freeGoat} />
      </div>
    );
  }
}

export default App;
