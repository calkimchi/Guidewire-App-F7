import React from 'react';
import { Navbar, Page, Popup, BlockTitle, Block, NavRight, Link, Button, View } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popupOpened: false,
    }
  }
  render() {
    return (
	<div onPageBeforeRemove={this.onPageBeforeRemove.bind(this)}>
        

        <BlockTitle>Payment Options</BlockTitle>
        <Block strong>
          <p>Please select your payment option below:</p>
          <p>
            <Button fill round large popupOpen=".demo-popup-swipe" color="8162ff">Stripe</Button>
			<Button fill round large popupOpen=".demo-popup-swipe" color="blue">Venmo</Button>
			<Button fill round large popupOpen=".demo-popup-swipe" color="orange">Bank</Button>
          </p>
        </Block>


        <Popup className="demo-popup" opened={this.state.popupOpened} onPopupClosed={() => this.setState({popupOpened : false})}>
          <Page>
            <Navbar title="Popup Title">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
              <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
            </Block>
          </Page>
        </Popup>

        <Popup push className="demo-popup-push">
          <View>
            <Page>
              <Navbar title="Push Popup" large transparent>
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
              </Block>
            </Page>
          </View>
        </Popup>

        <Popup className="demo-popup-swipe" swipeToClose>
          <Page>
            <Navbar title="Payment">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>

			<div slot="fixed" className="swipe-handler"></div>
            <BlockTitle large color="green">Charge: $XXX per month</BlockTitle>
            <Block strong>
              <p>Would you like to purchase Gecko Car insurance Gold Plan for $XXX per month?</p>
			  <p>For this purchase, you will recieve $50,000 worth of coverage for: automobile accidents, dents, etc.</p>
            </Block>
			
			<p>
            <Button popupClose color="8162ff" onClick={this.showToastIcon.bind(this)}>Sumbit!</Button>
          </p>
			
          </Page>
        </Popup>

        <Popup className="demo-popup-swipe-handler" swipeToClose="to-bottom" swipeHandler=".swipe-handler">
          <Page>
            <div slot="fixed" className="swipe-handler"></div>
            <BlockTitle large>Hello!</BlockTitle>
            <Block strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
              <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
              <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
            </Block>
          </Page>
        </Popup>
      </div>
	  
    )
  }
  createPopup() {
    const self = this;
    // Create popup
    if (!self.popup) {
      self.popup = self.$f7.popup.create({
        content: `
          <div class="popup">
            <div class="page">
              <div class="navbar">
                <div class="navbar-inner">
                  <div class="navbar-bg"></div>
                  <div class="title">Dynamic Popup</div>
                  <div class="right"><a href="#" class="link popup-close">Close</a></div>
                </div>
              </div>
              <div class="page-content">
                <div class="block">
                  <p>This popup was created dynamically</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                </div>
              </div>
            </div>
          </div>
        `.trim(),
      });
    }
    // Open it
    self.popup.open();
  }
  onPageBeforeRemove() {
    const self = this;
    // Destroy popup when page removed
    if (self.popup) self.popup.destroy();
	
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
  
  
  showToastIcon() {
    const self = this;
    // Create toast
    if (!self.toastIcon) {
      self.toastIcon = self.$f7.toast.create({
        icon: self.$theme.ios || self.$theme.aurora ? '<i class="f7-icons">star_fill</i>' : '<i class="material-icons">star</i>',
        text: 'Purchase Complete! Please Navigate to the "Claim" Tab',
        position: 'center',
        closeTimeout: 4500,
      });
    }
    // Open it
    self.toastIcon.open();
  }
  onPageBeforeOut() {
    const self = this;
    self.$f7.toast.close();
  }
};
