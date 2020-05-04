import React from 'react';
import { Page, Navbar, Block, BlockTitle } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="About" backLink="Back" />
    <BlockTitle>About</BlockTitle>
    <Block strong>
      <p>This application prototype is developed by San Francisco State University students for the Guidewire Insurtech challenge.</p>
      <p>Supervised by Leigh Jin and Advised by Andrea Anderson, we were challenged to reinvent the insurance purchasing and claims process for 18-25 year olds.</p>
    </Block>
	
	<BlockTitle>Team</BlockTitle>
    <Block strong>
      <p>Team members include: Calvin Kim, Sabina Shokirov, Andrew Manning, Jimmy Negandhi, Jon Villasanta</p>
    </Block>
	
	<BlockTitle>Prototype Details</BlockTitle>
    <Block strong>
      <p>This high-fidelity prototype was developed by <a class="link external" href="http://www.pmcalvin.com">Calvin Kim</a> using Framework 7 for React</p>
	  <p>Coded in JSX, this framework was chosen for its rapid development potential and integrability with React components. This framework is also designed in a way for instant and automatic translation to design languages (material design and ios) for popular mobile phones and web.</p>
    </Block>
  </Page>
);