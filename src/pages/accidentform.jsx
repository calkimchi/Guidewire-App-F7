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

import TextEdit from './text-editor.jsx'

export default () => (
  <Page name="form">
    <Navbar title="Form" backLink="Back"></Navbar>

    <BlockTitle>Accident Form</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="2nd party's Name"
        type="text"
        placeholder="name"
      ></ListInput>

      <ListInput
        label="2nd party's E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="2nd party's Insurer"
        type="text"
        placeholder="Insurer"
      ></ListInput>

      <ListInput
        label="2nd party's Phone Number"
        type="tel"
        placeholder="Phone"
      ></ListInput>

      <ListInput
        label="Accident Date"
        type="date"
        placeholder="date of accident"
        defaultValue="2020-05-21"
      ></ListInput>
	  
	  <TextEdit />

    </List>

  </Page>
);