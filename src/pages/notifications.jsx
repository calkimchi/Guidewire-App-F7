import React from 'react';
import { Navbar, Page, Block, BlockTitle, Button } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BlockTitle>Notifications</BlockTitle>
        <Block>
          <p>Millenials are less likely to be influenced by blatant advertisement. Subtle forms of insurance marketing are required to show them the value of getting coverage.</p>
          <p>This example shows a push notification that they would recieve to help them understand the importances of purchasing insurance.</p>
		  
          <p><Button fill onClick={this.showNotificationCloseOnClick.bind(this)}>Example Notification</Button></p>
        </Block>
      </div>
    )
  }
  
  showNotificationCloseOnClick() {
    const self = this;
    // Create toast
    if (!self.notificationCloseOnClick) {
      self.notificationCloseOnClick = self.$f7.notification.create({
        icon: '<i class="icon icon-f7"></i>',
        title: 'Legacy Insurance - Success Story',
        titleRightText: 'now',
        subtitle: 'How I saved $5000 by purchasing travel insurance',
        text: 'Click to open story',
        closeOnClick: true,
      });
    }
    // Open it
    self.notificationCloseOnClick.open();
  }
  
  
  onPageBeforeOut() {
    const self = this;
    self.$f7.notification.close();
  }
  onPageBeforeRemove() {
    const self = this;
    // Destroy toasts when page removed
    if (self.notificationFull) self.notificationFull.destroy();
    if (self.notificationWithButton) self.notificationWithButton.destroy();
    if (self.notificationCloseOnClick) self.notificationCloseOnClick.destroy();
    if (self.notificationCallbackOnClose) self.notificationCallbackOnClose.destroy();
  }
};