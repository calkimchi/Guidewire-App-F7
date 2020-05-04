import React from 'react';
import { Navbar, Page, Block, BlockTitle, Card, CardHeader, CardContent, CardFooter, List, ListItem, Link } from 'framework7-react';

import ReviewPhotos from './photo-browser.jsx'

export default () => (
  <Page>
    <Navbar title="Capturing Photos" backLink="Back" />

    <BlockTitle>accident001.jpg</BlockTitle>
    <Card className="demo-card-header-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{height:'60vh', backgroundRepeat:'no-repeat', backgroundImage: 'url(https://www.suburbanautobody.com/Portals/0/SunBlogNuke/37/26086583_l.jpg)' }}
      >
	  	Capturing in progress...
	  </CardHeader>
      <CardContent>
        <p className="date">May 21, 2020</p>
        
      </CardContent>
      <CardFooter>
        
        <Link>Capture Photo</Link>
      </CardFooter>
    </Card>
	
	<ReviewPhotos />
  </Page>
);
