import React from 'react';
import { Navbar, Page, PhotoBrowser, Block, Row, Col, Button } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          url: 'https://www.suburbanautobody.com/Portals/0/SunBlogNuke/37/26086583_l.jpg',
          caption: 'accident001.jpg',
        },
        {
          url: 'https://j62m0xbpio12rkz93e80jjwj-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/san-jose-car-accident.png',
          caption: 'accident002.jpg',
        },
        {
          url: 'https://cdn.aarp.net/content/dam/aarp/auto/2019/07/1140-two-cars-in-accident.jpg',
          caption: 'accident003.jpg',
        },
      ],
    }
  }
  render() {
    return (
      <div>
        <Block strong>
          
          <Row>
            <Col>
              <PhotoBrowser photos={this.state.photos} theme="dark" type="popup" ref={(el) => {this.popupDark = el}} />
              <Button fill onClick={() => this.popupDark.open()}>
			  	Review Pictures
			  </Button>
            </Col>
          </Row>
        </Block>
      </div>
    );
  }
};
