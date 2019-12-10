import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCoral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.goats;
    const { freeGoat } = this.props;
    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} freeGoat={freeGoat} />);
    return (
      <div className="goatCoral">
        {goatCards}
      </div>
    );
  }
}

export default GoatCoral;
