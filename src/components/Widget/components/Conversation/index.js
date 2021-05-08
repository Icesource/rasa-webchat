import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import './style.scss';
import { showImgZoom,closeImgZoom } from 'actions';
import { connect } from 'react-redux';

const Conversation = props =>
  <div className="rw-conversation-container"  onClick={()=>console.log(props.imgUrl)}>
    {props.imgShow &&
      <div>
          <div style={{top:'50%',position:'absolute',transform:'translate(0, -50%)', borderRadius:'50%', zIndex:999999}}>
              <img style={{'width': '100%'}} src='https://i.imgur.com/nGF1K8f.jpg' />
          </div>
          <div className='rw-img-show' onClick={props.closeImgZoom}/>
      </div>
    }

    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      toggleFullScreen={props.toggleFullScreen}
      fullScreenMode={props.fullScreenMode}
      showCloseButton={props.showCloseButton}
      showFullScreenButton={props.showFullScreenButton}
      connected={props.connected}
      connectingText={props.connectingText}
      closeImage={props.closeImage}
      profileAvatar={props.profileAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
      params={props.params}
      customComponent={props.customComponent}
      showMessageDate={props.showMessageDate}
    />
    <Sender
      sendMessage={props.sendMessage}
      disabledInput={props.disabledInput}
      inputTextFieldHint={props.inputTextFieldHint}
    />

  </div>;

Conversation.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  sendMessage: PropTypes.func,
  profileAvatar: PropTypes.string,
  toggleFullScreen: PropTypes.func,
  fullScreenMode: PropTypes.bool,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFullScreenButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  inputTextFieldHint: PropTypes.string,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
  closeImage: PropTypes.string,
  customComponent: PropTypes.func,
  showMessageDate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

const mapStateToProps = state => ({
    imgUrl: state.imagezoom.get('imgUrl'),
    imgShow: state.imagezoom.get('imgShow'),
});

const mapDispatchToProps = dispatch => ({
    showImgZoom: () => dispatch(showImgZoom()),
    closeImgZoom: () => dispatch(closeImgZoom())
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
