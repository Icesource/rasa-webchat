import React, { PureComponent } from 'react';
import { PROP_TYPES } from 'constants';
import { showImgZoom,closeImgZoom } from 'actions';

import './styles.scss';
import { connect } from 'react-redux';

class ImgReply extends PureComponent {
  render() {
    const { params: { images: { dims = {} } = {} } } = this.props;
    const { width, height } = dims;
    // Convert map to object
    const message = this.props.message.toJS();
    const { title, image } = message;
    const customCss = this.props.message.get('customCss') && this.props.message.get('customCss').toJS();

    if (customCss && customCss.style === 'class') {
      customCss.css = customCss.css.replace(/^\./, '');
    }

    return (

      <div
        className={customCss && customCss.style === 'class' ?
          `image ${customCss.css}` :
          'image'}
        style={{ cssText: customCss && customCss.style === 'custom' ?
          customCss.css :
          undefined }}
      >
        <b className="rw-image-title">
          { title }
        </b>
        <div className="rw-image-details" style={{ width, height }}>
          <img onClick={()=>this.props.showImgZoom(image)} className="rw-image-frame" src={image} />
        </div>
      </div>
    );
  }
}

ImgReply.propTypes = {
  message: PROP_TYPES.IMGREPLY
};

ImgReply.defaultProps = {
  params: {}
};

const mapStateToProps = state => ({
  imgUrl: state.imagezoom.get('imgUrl'),
  imgShow: state.imagezoom.get('imgShow'),
});

const mapDispatchToProps = dispatch => ({
  showImgZoom: (imgUrl) => dispatch(showImgZoom(imgUrl)),
  closeImgZoom: () => dispatch(closeImgZoom())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImgReply);
