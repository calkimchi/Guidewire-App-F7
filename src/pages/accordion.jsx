import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  List,
  ListItem,
  ListInput,
  Row,
  Button,
  Range,
  Toggle,
  AccordionContent,
  AccordionItem,
  AccordionToggle,
} from 'framework7-react';

import Popup from "./popup.jsx"
import SearchBar from "./searchbar.jsx"


export default () => (
  <Page>
    <Navbar title="Purchase Insurance" backLink="Back" />

    <BlockTitle>Pre-Quotation Information</BlockTitle>
    <List accordionList accordionOpposite>
      <ListItem accordionItem title="Introduction">
        <AccordionContent>
          <Block>
            <p>
              The purchasing process is quick and easy! Just follow the steps below
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  
      <ListItem accordionItem title="Request Quote Form">
        <AccordionContent>
			<List noHairlinesMd>
			  <ListInput
				label="Name"
				type="text"
				placeholder="Muhammed"
			  ></ListInput>

			  <ListInput
				label="E-mail"
				type="email"
				placeholder="Muhammed@gmail.com"
			  ></ListInput>

			  <ListInput
				label="Location"
				type="url"
				placeholder="San Mateo, California"
			  ></ListInput>

			  <ListInput
				label="Age"
				type="tel"
				placeholder="24"
			  ></ListInput>

			  <ListInput
				label="Phone"
				type="tel"
				placeholder="555-555-5555"
			  ></ListInput>

			  <ListInput
				label="Gender"
				type="select"
				>
				<option>Male</option>
				<option>Female</option>
			  </ListInput>

			  <ListInput
				label="Insurer"
				type="select"
				>
				<option>Gecko</option>
				<option>BBB</option>
				<option>AllCity</option>
				<option>BMB</option>
				<option>European Integrity</option>
				<option>European Family Insurance</option>
			  </ListInput>

			  <ListInput
				label="Birth date"
				type="date"
				placeholder="Birth day"
				defaultValue="1994-04-30"
			  ></ListInput>

			</List>
        </AccordionContent>
		
      </ListItem>
	  
      <ListItem accordionItem title="Select Agent Near You">
        <AccordionContent>
          
		  <SearchBar />
		  
        </AccordionContent>
      </ListItem>
    </List>
	
	<Popup />

  </Page>
);

