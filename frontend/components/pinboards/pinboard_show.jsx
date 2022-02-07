import React from 'react';
import PinIndexItem from '../pins/pin_item';

class PinboardShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rerenderPlease: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/pins/${e.target.id}`);
  }

  handleRemove(e) {
    e.preventDefault();

    this.props.deletePinning(e.target.id)
      .then(() => this.setState({ rerenderPlease: !this.state.rerenderPlease }))
  }

  componentDidMount() {
    this.props.requestPinboard(this.props.pinboardId);
  }

  render() {
    if (!this.props.pinboard && !this.props.pin) {
      return ""
    }
    
    const { pinboard, pins, sessionId, openModal } = this.props;
    let pinboards = [];

    return (
      <div className='pinboard-show-page'>
        <div className='pinboard-info'>
          <h1>{this.props.pinboard.title}</h1>
          <p>{pins.length} Pins</p>
        </div>
        <div className='pinboard-edit'>
          {sessionId == pinboard.user_id ?
            <button onClick={()=> openModal('edit-pinboard')}>Edit</button> : "" }
        </div>
        <div className='index-page-listings'>
          <ul>
            { pins.map((pin) => (
              <PinIndexItem 
                key={pin.id}
                pin={pin}
                handleClick={this.handleClick}
                handleRemove={this.handleRemove}
                pinboards={pinboards}
              /> )
            )}
          </ul>
        </div>
      </div>

    )
  }
}

export default PinboardShow