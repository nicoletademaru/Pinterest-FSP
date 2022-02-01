import React from 'react';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const { pin, handleClick } = this.props;
    return (
      <div className='pin-index-item'>
        <div className='pin-save'>
          <button>Save</button>
        </div>
        <figure className='hover-test'>
          <img
            key={pin.id}
            id={pin.id}
            src={pin.photoUrl}
            alt="photo"
            onClick={handleClick}
          />
          <figcaption>{pin.title}</figcaption>
        </figure>
      </div>
    )
  }
};

export default PinIndexItem;

