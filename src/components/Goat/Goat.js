import React from 'react';
import goatShape from '../../helpers/propz/goatShape';


class Goat extends React.Component {
  static propTypes = {
    goats: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={goat.imgUrl} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
