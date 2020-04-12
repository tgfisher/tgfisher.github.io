import React, { Component, Fragment } from 'react';
import {Row, Col} from 'reactstrap'

import GalleriesList from '../GalleriesList/GalleriesList';
import galleries from '../../galleries.json';

class Easteregg extends Component {
  render() {
    return (
      <Fragment>
          <Row>
            <Col>
              <br />
              <br />
              <br />
              <br />
              <br />
                <h2> These galleries are tired, but since you found them... Enjoy! </h2>
              <br />
              <br />
              <img width="60%" height="auto" src= "https://lh3.googleusercontent.com/KE2BDU1dXxwYs2OisZb_2-IeX3LxVP7PORUJCE8uj8wlW6kEEF1uRhdnX6NYJd0AadTu_12ca7u4gGS9cyOk55mQbcgYxRF_E_-4IG0V8GusnEN2cNlKtyfk_6zj67rVoL_PVwojlg=w5000-h5000" alt="sleepy.jpg"/>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                <GalleriesList galleries={galleries.retired_galleries} />
              <br />
            </Col>
          </Row>
      </Fragment>
    )
  }
}

export default Easteregg;
