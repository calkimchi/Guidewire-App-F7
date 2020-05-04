import React from 'react';
import { Page, Navbar, List, ListItem, Block } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="catalog">
        <Navbar title="Claims Process" />
		<Block strong>
		  <p>This is the Insurance claims process, at each step, we take you through the process of filing for Car Insurance, using innovative technologies along the way. </p>
			<p>Now that you have completed your purchase of insurance, it's time to file a claim. In our insurance experience, a week has passed, and you've gotten into a car accident.</p>
			<p>Please navigate through the links below in order for our claims experience.</p>
		</Block>
		<List>
		  <ListItem link="/cards/" title="Upload: Car Accident Images"/>
		  <ListItem link="/accidentform/" title="Fill out: Claims Form"/>
		  <ListItem link="/treeview/" title="Explore Filesystem: Car Accident"/>
		  <ListItem link="/messages/" title="Converse: Insurance Agent Chatbot"/>
		  <ListItem link="/timeline-vertical/" title="Review: Car Accident Timeline"/>
		  
		</List>
		
		<Block strong>
		  <p>And that's it! We hope you enjoyed your journey in exploring the future of P&C insurance!</p>
		</Block>
        
      </Page>
    );
  }
}