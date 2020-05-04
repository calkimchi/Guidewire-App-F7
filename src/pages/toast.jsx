import React from 'react';
import { Navbar, Page, Block, Button } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Page onPageBeforeRemove={this.onPageBeforeRemove.bind(this)} onPageBeforeOut={this.onPageBeforeOut.bind(this)}>
        <Navbar title="Toast" backLink="Back"></Navbar>
        <Block strong>
          
          <p>
            <Button fill onClick={this.showToastIcon.bind(this)}>Toast with icon</Button>
          </p>
          
        </Block>
      </Page>
    );
  }
  
  showToastIcon() {
    const self = this;
    // Create toast
    if (!self.toastIcon) {
      self.toastIcon = self.$f7.toast.create({
        icon: self.$theme.ios || self.$theme.aurora ? '<i class="f7-icons">star_fill</i>' : '<i class="material-icons">star</i>',
        text: 'I\'m on center',
        position: 'center',
        closeTimeout: 2000,
      });
    }
    // Open it
    self.toastIcon.open();
  }
  onPageBeforeOut() {
    const self = this;
    self.$f7.toast.close();
  }
  onPageBeforeRemove() {
    const self = this;
    // Destroy toasts when page removed
    if (self.toastBottom) self.toastBottom.destroy();
    if (self.toastTop) self.toastTop.destroy();
    if (self.toastCenter) self.toastCenter.destroy();
    if (self.toastIcon) self.toastIcon.destroy();
    if (self.toastLargeMessage) self.toastLargeMessage.destroy();
    if (self.toastWithButton) self.toastWithButton.destroy();
    if (self.toastWithCustomButton) self.toastWithCustomButton.destroy();
    if (self.toastWithCallback) self.toastWithCallback.destroy();
  }
};
