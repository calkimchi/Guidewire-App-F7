import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default () => (
  <Page name="settings">
    <Navbar title="Settings" />

    <BlockTitle>Profile</BlockTitle>
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

      <ListInput
        type="text"
        label="Textarea"
        placeholder="Bio"
      ></ListInput>
      
    </List>

  </Page>
  
);