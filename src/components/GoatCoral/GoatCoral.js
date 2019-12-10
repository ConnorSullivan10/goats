import React from 'react';
import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  render() {
    const myGoats = this.props.goats;
    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat}/>);
    return (
      <div className="goatCoral">
        {goatCards}
      </div>
    );
  }
}

export default GoatCoral;
