import React from 'react';

class Goat extends React.Component {
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
