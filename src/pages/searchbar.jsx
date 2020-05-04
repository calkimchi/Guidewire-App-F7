import React from 'react';
import { Navbar, Page, Searchbar, Subnavbar, List, ListItem } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        
            <Searchbar
              searchContainer=".search-list"
              searchIn=".item-title"
              disableButton={!this.$theme.aurora}
            ></Searchbar>
			
        <List className="searchbar-not-found">
          <ListItem title="Nothing found"></ListItem>
        </List>
        <List className="search-list searchbar-found">
          <ListItem title="Gerard"></ListItem>
          <ListItem title="Alexa"></ListItem>
          <ListItem title="Cameron"></ListItem>
          <ListItem title="Jill"></ListItem>
          <ListItem title="Jeffery"></ListItem>
          <ListItem title="John"></ListItem>
          <ListItem title="Joanna"></ListItem>
          <ListItem title="Dennis"></ListItem>
          <ListItem title="Ford"></ListItem>
          <ListItem title="Harrison"></ListItem>
          <ListItem title="Jackson"></ListItem>
          <ListItem title="Michael"></ListItem>
          <ListItem title="Leigh"></ListItem>
          <ListItem title="Andrea"></ListItem>
          <ListItem title="Mike"></ListItem>
          <ListItem title="Wazaouski"></ListItem>
          <ListItem title="Jobs"></ListItem>
          <ListItem title="Wozniak"></ListItem>
          <ListItem title="Greg"></ListItem>
          <ListItem title="Jill"></ListItem>
        </List>
      </div>
    );
  }
}